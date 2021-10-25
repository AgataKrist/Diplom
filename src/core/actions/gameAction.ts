import { IFaceDie } from "./../../types/index";
import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setKikCountAction = createAction(ACTIONS.SET_KIK_COUNT)<number>();
export const setDisabledBtnAction = createAction(
	ACTIONS.SET_IS_DISABLED_BTN
)<boolean>();
export const setFaceDCAction = createAction(ACTIONS.SET_FACE_DC)<IFaceDie>();
export const setFaceMarvelAction = createAction(
	ACTIONS.SET_FACE_MARVEL
)<IFaceDie>();
export const setTableFightAction = createAction(ACTIONS.SET_TABLE_FIGHT)<any>();
export const setRollingAction = createAction(ACTIONS.SET_ROLLING)<boolean>();
export const setRemaningLifesAction = createAction(
	ACTIONS.SET_REMANING_LIFES
)<any>();
export const setWinnerAction = createAction(ACTIONS.SET_WINNER)<any>();
