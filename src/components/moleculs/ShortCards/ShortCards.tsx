import React from "react";
import { ShortCardItem } from "../../atoms/ShortCardItem";
import { getHeroesState } from "../../../core/selectors/heroesSelector";

import s from "./ShortCards.module.css";
import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import marvelLogo from "../../../assets/marvel_logo.png";
import DCLogo from "../../../assets/dc_logo.png";

import { IHero } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import {
	setChoicedHeroDCAction,
	setChoicedHeroMarvelAction,
} from "../../../core";

interface IShortCards {
	hero: any;
	publisher: string;
	onHandlerSlider: (way: string, publisher: string, stepSize: number) => void;
}

export const ShortCards = ({
	hero,
	onHandlerSlider,
	publisher,
}: IShortCards) => {
	const { heroesDC, heroesMarvel } = useSelector(getHeroesState) as any;

	const dispatch = useDispatch();

	const choiceHero = (hero: IHero, publisher: string) => {
		publisher === "DC Comics"
			? dispatch(setChoicedHeroDCAction(hero))
			: dispatch(setChoicedHeroMarvelAction(hero));
	};
	return (
		<div className={s.cardRow__wrapper}>
			<div className={s.card__wrapper}>
				<div className={cn(s.slider, s.prev)}>
					{hero.slider.prev > 0 && (
						<FontAwesomeIcon
							onClick={() =>
								onHandlerSlider(
									"prev",
									hero.heroes[0].biography.publisher,
									6
								)
							}
							icon={faChevronLeft}
						/>
					)}
				</div>
				{hero.heroes &&
					hero.heroes
						.slice(hero.slider.prev, hero.slider.next)
						.map((item: any) => {
							return (
								<ShortCardItem
									key={item.id}
									onChoicedHero={choiceHero}
									hero={item}
								/>
							);
						})}
				<div className={cn(s.slider, s.next)}>
					{hero.slider.next < hero.heroes?.length && (
						<FontAwesomeIcon
							onClick={() =>
								onHandlerSlider(
									"next",
									hero.heroes[0].biography.publisher,
									6
								)
							}
							icon={faChevronRight}
						/>
					)}
				</div>
			</div>

			<div
				style={
					publisher === "DC Comics"
						? {
								backgroundImage: ` url(${
									heroesDC.choicedHero
										? heroesDC.choicedHero.images.md
										: DCLogo
								})`,
						  }
						: {
								backgroundImage: ` url(${
									heroesMarvel.choicedHero
										? heroesMarvel.choicedHero.images.md
										: marvelLogo
								})`,
						  }
				}
				className={s.choicedCard__wrapper}
			></div>
		</div>
	);
};
