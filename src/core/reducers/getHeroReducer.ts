import { IHero } from "./../../types/index";
import { ActionType, createReducer } from "typesafe-actions";
import { setHeroAction } from "../actions";

export interface IHeroState {
	hero: IHero | null;
}

const defaultState: IHeroState = {
	hero: null,
};

const actions = {
	setHeroAction,
};

export const getHeroReducer = createReducer<
	IHeroState,
	ActionType<typeof actions>
>(defaultState).handleAction(setHeroAction, (state, { payload: hero }) => ({
	...state,
	hero,
}));
