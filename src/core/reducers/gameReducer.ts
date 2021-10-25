import { FightTable } from "./../../components/moleculs/FightTable/FightTable";
import { IFaceDie, IHero } from "../../types/index";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setKikCountAction,
	setDisabledBtnAction,
	setFaceDCAction,
	setFaceMarvelAction,
	setTableFightAction,
	setRollingAction,
	setRemaningLifesAction,
	setWinnerAction,
} from "../actions/gameAction";

export interface IGameState {
	faceDC: IFaceDie;
	faceMarvel: IFaceDie;
	winner: any;
	tableFight: any;
	remaningLifes: any;
	kikCount: number;
	isDisabledBtn: boolean;
	rolling: boolean;
}

const defaultState: IGameState = {
	faceDC: {
		string: "one",
		number: 1,
	},
	faceMarvel: {
		string: "one",
		number: 1,
	},
	winner: {
		"DC Comics": 0,
		"Marvel Comics": 0,
	},
	tableFight: null,
	remaningLifes: null,

	kikCount: 0,
	isDisabledBtn: false,
	rolling: false,
};

const actions = {
	setKikCountAction,
	setDisabledBtnAction,
	setFaceDCAction,
	setFaceMarvelAction,
	setTableFightAction,
	setRollingAction,
	setRemaningLifesAction,
	setWinnerAction,
};

export const gameReducer = createReducer<
	IGameState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setKikCountAction, (state, { payload: kikCount }) => ({
		...state,
		kikCount,
	}))
	.handleAction(
		setDisabledBtnAction,
		(state, { payload: isDisabledBtn }) => ({
			...state,
			isDisabledBtn,
		})
	)
	.handleAction(setFaceDCAction, (state, { payload: faceDC }) => ({
		...state,
		faceDC,
	}))
	.handleAction(setFaceMarvelAction, (state, { payload: faceMarvel }) => ({
		...state,
		faceMarvel,
	}))
	.handleAction(setTableFightAction, (state, { payload: tableFight }) => ({
		...state,
		tableFight,
	}))
	.handleAction(setRollingAction, (state, { payload: rolling }) => ({
		...state,
		rolling,
	}))
	.handleAction(
		setRemaningLifesAction,
		(state, { payload: remaningLifes }) => ({
			...state,
			remaningLifes,
		})
	)
	.handleAction(setWinnerAction, (state, { payload: winner }) => ({
		...state,
		winner,
	}));
