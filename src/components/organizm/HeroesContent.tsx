import React, { useEffect, useState } from "react";
import s from "./HeroesContent.module.css";
import { CardItem } from "../atoms/CardItem";
import { IHero, IPagination } from "../../types";
import { Pagination } from "../moleculs/Pagination";
import { useDispatch } from "react-redux";
import {
	setFilteredDCAction,
	setFilteredMarvelAction,
	setPaginationDCAction,
	setPaginationMarvelAction,
} from "../../core";
import { filter, sorting } from "../../helper";
import { Control } from "../moleculs/Contol";

interface IHeroesContent {
	heroes: IHero[] | null;
	pagination: IPagination;
	marvel?: boolean;
	filteredHero: IHero[] | null;
}

export const HeroesContent = ({
	heroes,
	pagination,
	marvel,
	filteredHero,
}: IHeroesContent) => {
	const dispatch = useDispatch();
	const [inputSearchValue, setInputSearchValue] = useState<string>("");
	const [checkedValuePowerstats, setCheckedValuePowerstats] =
		useState<string>("");
	const lastHeroIndex = pagination.currentPage * pagination.perPage;
	const firstHeroIndex = lastHeroIndex - pagination.perPage;
	const currentHero = filteredHero?.slice(firstHeroIndex, lastHeroIndex);

	const paginate = (pageNumber: number) => {
		document.querySelector("#main")?.scrollTo(0, 660);

		dispatch(
			marvel
				? setPaginationMarvelAction({
						...pagination,
						currentPage: pageNumber,
				  })
				: setPaginationDCAction({
						...pagination,
						currentPage: pageNumber,
				  })
		);
	};
	const nextPage = () => {
		document.querySelector("#main")?.scrollTo(0, 660);

		dispatch(
			marvel
				? setPaginationMarvelAction({
						...pagination,
						currentPage: pagination.currentPage + 1,
				  })
				: setPaginationDCAction({
						...pagination,
						currentPage: pagination.currentPage + 1,
				  })
		);
	};
	const prevPage = (e: any) => {
		document.querySelector("#main")?.scrollTo(0, 660);

		dispatch(
			marvel
				? setPaginationMarvelAction({
						...pagination,
						currentPage: pagination.currentPage - 1,
				  })
				: setPaginationDCAction({
						...pagination,
						currentPage: pagination.currentPage - 1,
				  })
		);
	};

	const sortByPowerstats = (param: string) => {
		setCheckedValuePowerstats(param);
	};
	useEffect(() => {
		dispatch(
			marvel
				? setPaginationMarvelAction({
						...pagination,
						currentPage: 1,
				  })
				: setPaginationDCAction({
						...pagination,
						currentPage: 1,
				  })
		);
		if (checkedValuePowerstats === "") {
			marvel
				? dispatch(setFilteredMarvelAction(heroes))
				: dispatch(setFilteredDCAction(heroes));
			return;
		}
		const sortedHeroes = sorting(filteredHero, checkedValuePowerstats);
		marvel
			? dispatch(setFilteredMarvelAction(sortedHeroes))
			: dispatch(setFilteredDCAction(sortedHeroes));
	}, [dispatch, checkedValuePowerstats, marvel, sorting]);

	const search = (e: string) => {
		setInputSearchValue(e);
	};

	useEffect(() => {
		const newFilteredHeroes = filter(heroes, inputSearchValue);
		if (inputSearchValue.length > 2) {
			marvel
				? dispatch(setFilteredMarvelAction(newFilteredHeroes))
				: dispatch(setFilteredDCAction(newFilteredHeroes));
			return;
		}
		marvel
			? dispatch(setFilteredMarvelAction(heroes))
			: dispatch(setFilteredDCAction(heroes));
	}, [dispatch, inputSearchValue, marvel, filter]);

	const reset = () => {
		setInputSearchValue("");
		setCheckedValuePowerstats("");
	};

	if (pagination.loading) {
		return <h2>...loading</h2>;
	}
	return (
		<>
			<Control
				value={inputSearchValue}
				checkedValuePowerstats={checkedValuePowerstats}
				reset={reset}
				search={search}
				sortByPowerstats={sortByPowerstats}
			/>
			<div id="wrapper" className={s.heroesContent__wrapper}>
				{currentHero?.map((hero, i) => (
					<CardItem key={hero.id} hero={hero} />
				))}
			</div>
			<Pagination
				pagination={pagination}
				perPage={pagination.perPage}
				totalHeroes={filteredHero?.length}
				paginate={paginate}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</>
	);
};
