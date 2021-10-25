import React, { useEffect } from "react";
import s from "./Fight.module.css";
import sBtn from "../../moleculs/FightTable/FightTable.module.css";

import { MainTemplate } from "../../Templates/MainTemplate";

import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
	getFightersAction,
	setDisabledBtnAction,
	setFaceDCAction,
	setFaceMarvelAction,
	setKikCountAction,
	setRemaningLifesAction,
	setRollingAction,
	setTableFightAction,
	setWinnerAction,
} from "../../../core";
import {
	gameState,
	getFightersState,
} from "../../../core/selectors/heroesSelector";
import { FightCard } from "../../moleculs/FightCard";
import { FightTable } from "../../moleculs/FightTable";
import { RollDies } from "../../moleculs/RollDies";
import { IFaceDie } from "../../../types";
import { randomface } from "../../../helper";

export const Fight = () => {
	const { idCD, idMarvel } = useParams() as any;
	const { fighterDC, fighterMarvel } = useSelector(getFightersState);
	const {
		kikCount,
		isDisabledBtn,
		faceDC,
		faceMarvel,
		tableFight,
		rolling,
		remaningLifes,
		winner,
	} = useSelector(gameState) as any;

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(
			getFightersAction({
				idCD,
				idMarvel,
			})
		);
		dispatch(
			setRemaningLifesAction({
				"DC Comics": 100,
				"Marvel Comics": 100,
			})
		);
		dispatch(
			setWinnerAction({
				"DC Comics": 0,
				"Marvel Comics": 0,
			})
		);

		dispatch(setTableFightAction(null));
		dispatch(setKikCountAction(0));
	}, [dispatch, idCD, idMarvel]);

	const startGame = () => {
		const newTableFight = Object.keys(fighterDC?.powerstats).reduce(
			(acc: any, value: any) => {
				return {
					...acc,
					[value]: null,
				};
			},
			{}
		);
		dispatch(setTableFightAction(newTableFight));
	};

	const kik = (kikCount: number) => {
		dispatch(setDisabledBtnAction(true));
		dispatch(setRollingAction(true));

		setTimeout(() => {
			const key = Object.keys(fighterDC?.powerstats)[kikCount] as string;
			if (
				fighterDC?.powerstats[key] * faceDC?.number >
				fighterMarvel?.powerstats[key] * faceMarvel?.number
			) {
				dispatch(
					setTableFightAction({
						...tableFight,
						[key]: "DC Comics",
					})
				);
				dispatch(
					setWinnerAction({
						...winner,
						"DC Comics": winner["DC Comics"] + 1,
					})
				);
			}
			if (
				fighterDC?.powerstats[key] * faceDC?.number <
				fighterMarvel?.powerstats[key] * faceMarvel?.number
			) {
				dispatch(
					setTableFightAction({
						...tableFight,
						[key]: "Marvel Comics",
					})
				);
				dispatch(
					setWinnerAction({
						...winner,
						"Marvel Comics": winner["Marvel Comics"] + 1,
					})
				);
			}

			if (remaningLifes) {
				fighterDC?.powerstats[key] * faceDC?.number >
				fighterMarvel?.powerstats[key] * faceMarvel?.number
					? dispatch(
							setRemaningLifesAction({
								...remaningLifes,
								"Marvel Comics":
									remaningLifes["Marvel Comics"] - 16.66,
							})
					  )
					: dispatch(
							setRemaningLifesAction({
								...remaningLifes,
								"DC Comics": remaningLifes["DC Comics"] - 16.66,
							})
					  );
			}

			dispatch(setDisabledBtnAction(false));
			dispatch(setRollingAction(false));
			dispatch(setKikCountAction(kikCount + 1));
		}, 1000);

		dispatch(setFaceDCAction(randomface() as IFaceDie));
		dispatch(setFaceMarvelAction(randomface() as IFaceDie));
	};

	const finishGame = () => {
		history.push("/");
	};

	return (
		<MainTemplate
			fight
			main={
				<div className={s.fight__wrapper}>
					<div className={s.fight__content}>
						<FightCard
							valuesFight={remaningLifes}
							fighter={fighterDC}
							result={{
								win:
									winner["DC Comics"] >
									winner["Marvel Comics"],
								drown:
									winner["DC Comics"] ===
									winner["Marvel Comics"],
							}}
						/>
						<div className={s.center__column}>
							<FightTable
								isDisabled={isDisabledBtn}
								onStartGame={startGame}
								onKik={kik}
								kikCount={kikCount}
								tableFight={tableFight}
								fighterDC={fighterDC}
								fighterMarvel={fighterMarvel}
							/>
							{tableFight && kikCount !== 6 && (
								<RollDies
									rolling={rolling}
									faceDC={faceDC}
									faceMarvel={faceMarvel}
								/>
							)}
							{kikCount === 6 && (
								<button
									onClick={finishGame}
									className={sBtn.atuinBtn}
								>
									FINSH GAME
								</button>
							)}
						</div>
						<FightCard
							valuesFight={remaningLifes}
							fighter={fighterMarvel}
							result={{
								win:
									winner["DC Comics"] <
									winner["Marvel Comics"],
								drown:
									winner["DC Comics"] ===
									winner["Marvel Comics"],
							}}
						/>
					</div>
				</div>
			}
		/>
	);
};
