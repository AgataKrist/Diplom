import { IPagination } from "./../../types/index";
import { IHero } from "../../types/index";
import { ActionType, createReducer } from "typesafe-actions";

import {
	setMarvelAction,
	setPaginationMarvelAction,
	setFilteredMarvelAction,
} from "../actions/heroesAction";

export interface IMarvelState {
	heroes: IHero[] | null;
	pagination: IPagination;
	filteredHero: IHero[] | null;
}

const defaultState: IMarvelState = {
	heroes: null,
	pagination: {
		loading: false,
		currentPage: 1,
		perPage: 15,
	},
	filteredHero: null,
};

const actions = {
	setMarvelAction,
	setPaginationMarvelAction,
	setFilteredMarvelAction,
};

export const marvelReducer = createReducer<
	IMarvelState,
	ActionType<typeof actions>
>(defaultState)
	.handleAction(setMarvelAction, (state, { payload: heroes }) => ({
		...state,
		heroes,
	}))
	.handleAction(
		setPaginationMarvelAction,
		(state, { payload: pagination }) => ({
			...state,
			pagination,
		})
	)
	.handleAction(
		setFilteredMarvelAction,
		(state, { payload: filteredHero }) => ({
			...state,
			filteredHero,
		})
	);
