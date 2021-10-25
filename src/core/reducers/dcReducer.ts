import { IPagination } from "./../../types/index";
import { IHero } from "../../types/index";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setDCAction,
	setPaginationDCAction,
	setFilteredDCAction,
} from "../actions/heroesAction";

export interface IDCState {
	heroes: IHero[] | null;
	pagination: IPagination;
	filteredHero: IHero[] | null;
}

const defaultState: IDCState = {
	heroes: null,
	pagination: {
		loading: false,
		currentPage: 1,
		perPage: 15,
	},
	filteredHero: null,
};

const actions = {
	setDCAction,
	setPaginationDCAction,
	setFilteredDCAction,
};

export const dcReducer = createReducer<IDCState, ActionType<typeof actions>>(
	defaultState
)
	.handleAction(setDCAction, (state, { payload: heroes }) => ({
		...state,
		heroes,
	}))
	.handleAction(setPaginationDCAction, (state, { payload: pagination }) => ({
		...state,
		pagination,
	}))
	.handleAction(setFilteredDCAction, (state, { payload: filteredHero }) => ({
		...state,
		filteredHero,
	}));
