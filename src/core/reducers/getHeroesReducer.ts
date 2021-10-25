import { IHeroes } from "../../types/index";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setChoicedHeroDCAction,
	setChoicedHeroMarvelAction,
	setHeroesDCAction,
	setHeroesDCSliderAction,
	setHeroesMarvelAction,
	setHeroesMarvelSliderAction,
} from "../actions/heroesAction";

export interface IHeroesState {
	heroesDC: IHeroes;
	heroesMarvel: IHeroes;
}

const defaultState: IHeroesState = {
	heroesDC: {
		heroes: null,
		slider: {
			prev: 0,
			next: 6,
		},
		choicedHero: null,
	},
	heroesMarvel: {
		heroes: null,
		slider: {
			prev: 0,
			next: 6,
		},
		choicedHero: null,
	},
};

const actions = {
	setHeroesDCAction,
	setHeroesMarvelAction,
	setHeroesDCSliderAction,
	setHeroesMarvelSliderAction,
	setChoicedHeroDCAction,
	setChoicedHeroMarvelAction,
};

export const getHeroesReducer = createReducer<
	IHeroesState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setHeroesDCAction, (state, { payload }) => ({
		...state,
		heroesDC: {
			...state.heroesDC,
			heroes: payload,
		},
	}))
	.handleAction(setHeroesMarvelAction, (state, { payload }) => ({
		...state,
		heroesMarvel: {
			...state.heroesMarvel,
			heroes: payload,
		},
	}))
	.handleAction(setHeroesDCSliderAction, (state, { payload }) => ({
		...state,
		heroesDC: {
			...state.heroesDC,
			slider: payload,
		},
	}))
	.handleAction(setHeroesMarvelSliderAction, (state, { payload }) => ({
		...state,
		heroesMarvel: {
			...state.heroesMarvel,
			slider: payload,
		},
	}))
	.handleAction(setChoicedHeroDCAction, (state, { payload }) => ({
		...state,
		heroesDC: {
			...state.heroesDC,
			choicedHero: payload,
		},
	}))
	.handleAction(setChoicedHeroMarvelAction, (state, { payload }) => ({
		...state,
		heroesMarvel: {
			...state.heroesMarvel,
			choicedHero: payload,
		},
	}));
