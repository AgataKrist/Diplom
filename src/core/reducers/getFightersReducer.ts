import { IHero } from "../../types/index";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setFighterDCAction,
	setFighterMarvelAction,
} from "../actions/fighterAction";

export interface IFightersState {
	fighterDC: IHero | null;
	fighterMarvel: IHero | null;
}

const defaultState: IFightersState = {
	fighterDC: null,
	fighterMarvel: null,
};

const actions = {
	setFighterDCAction,
	setFighterMarvelAction,
};

export const getFightersReducer = createReducer<
	IFightersState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setFighterDCAction, (state, { payload: fighterDC }) => ({
		...state,
		fighterDC,
	}))
	.handleAction(
		setFighterMarvelAction,
		(state, { payload: fighterMarvel }) => ({
			...state,
			fighterMarvel,
		})
	);
