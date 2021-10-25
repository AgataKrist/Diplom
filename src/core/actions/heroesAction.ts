import { IFaceDie, IHero, IPagination } from "./../../types/index";
import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const getHeroesAction = createAction(ACTIONS.GET_HEROES)<any>();

export const setHeroesDCAction = createAction(ACTIONS.SET_HEROES_DC)<any>();
export const setHeroesDCSliderAction = createAction(
	ACTIONS.SET_HEROES_DC_SLIDER
)<any>();

export const setHeroesMarvelAction = createAction(
	ACTIONS.SET_HEROES_MARVEL
)<any>();
export const setHeroesMarvelSliderAction = createAction(
	ACTIONS.SET_HEROES_MARVEL_SLIDER
)<any>();
export const setChoicedHeroDCAction = createAction(
	ACTIONS.SET_CHOICED_HERO_DC
)<any>();
export const setChoicedHeroMarvelAction = createAction(
	ACTIONS.SET_CHOICED_HERO_MARVEL
)<any>();
export const getFightersAction = createAction(ACTIONS.GET_FIGHTERS)<any>();

export const getDCAction = createAction(ACTIONS.GET_DC)<any>();
export const setDCAction = createAction(ACTIONS.SET_DC)<IHero[] | null>();
export const setPaginationDCAction = createAction(
	ACTIONS.SET_DC_PAGINATION
)<IPagination>();
export const setFilteredDCAction = createAction(
	ACTIONS.SET_DC_FITERED_HERO
)<any>();

export const getMarvelAction = createAction(ACTIONS.GET_MARVEL)<any>();
export const setMarvelAction = createAction(ACTIONS.SET_MARVEL)<
	IHero[] | null
>();
export const setPaginationMarvelAction = createAction(
	ACTIONS.SET_MARVEL_PAGINATION
)<IPagination>();
export const setFilteredMarvelAction = createAction(
	ACTIONS.SET_MARVEL_FITERED_HERO
)<any>();
export const getHeroAction = createAction(ACTIONS.GET_HERO)<any>();
export const setHeroAction = createAction(ACTIONS.SET_HERO)<IHero | null>();
