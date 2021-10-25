import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./ChoiseHero.module.css";
import cn from "classnames";
import { ShortCards } from "../../moleculs/ShortCards";

import {
	getHeroesAction,
	setHeroesDCSliderAction,
	setHeroesMarvelSliderAction,
} from "../../../core/actions/heroesAction";
import { getHeroesState } from "../../../core/selectors/heroesSelector";
import { MainTemplate } from "../../Templates/MainTemplate";
import { useHistory } from "react-router";
import { sliderNext, sliderPrev } from "../../../helper";

interface IShortCards {
	heroDC?: any;
	heroMarvel?: any;
}

export const ChoiseHero = ({ heroDC, heroMarvel }: IShortCards) => {
	const { heroesDC, heroesMarvel } = useSelector(getHeroesState) as any;

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getHeroesAction({ path: "/all.json" }));
	}, [dispatch]);

	const handlerSlider = (
		way: string,
		publisher: string,
		stepSize: number
	) => {
		if (publisher === "DC Comics") {
			way === "next"
				? dispatch(
						setHeroesDCSliderAction(
							sliderNext(
								heroesDC.slider.prev,
								heroesDC.slider.next,
								stepSize
							)
						)
				  )
				: dispatch(
						setHeroesDCSliderAction(
							sliderPrev(
								heroesDC.slider.prev,
								heroesDC.slider.next,
								stepSize
							)
						)
				  );
		}
		if (publisher === "Marvel Comics") {
			way === "next"
				? dispatch(
						setHeroesMarvelSliderAction(
							sliderNext(
								heroesMarvel.slider.prev,
								heroesMarvel.slider.next,
								stepSize
							)
						)
				  )
				: dispatch(
						setHeroesMarvelSliderAction(
							sliderPrev(
								heroesMarvel.slider.prev,
								heroesMarvel.slider.next,
								stepSize
							)
						)
				  );
		}
	};

	const toFight = () => {
		history.push(
			`/fight/${heroesDC.choicedHero.id}/${heroesMarvel.choicedHero.id}`
		);
	};

	return (
		<MainTemplate
			fight
			main={
				<div className={s.rows__wrapper}>
					<ShortCards
						onHandlerSlider={handlerSlider}
						hero={heroesDC}
						publisher={"DC Comics"}
					/>
					<div className={s.btn__wrapper}>
						<button
							onClick={toFight}
							disabled={
								!(
									heroesDC.choicedHero &&
									heroesMarvel.choicedHero
								)
							}
							className={cn(s.atuinBtn, {
								[s.disabled]: !(
									heroesDC.choicedHero &&
									heroesMarvel.choicedHero
								),
							})}
						>
							FIGHT
						</button>
					</div>
					<ShortCards
						onHandlerSlider={handlerSlider}
						hero={heroesMarvel}
						publisher={"Marvel"}
					/>
				</div>
			}
		/>
	);
};
