import { createAction } from "typesafe-actions";
import { IHero } from "../../types";

import { ACTIONS } from "./constants";

export const setFighterDCAction = createAction(
	ACTIONS.SET_FIGHTER_HERO_DC
)<IHero>();
export const setFighterMarvelAction = createAction(
	ACTIONS.SET_FIGHTER_HERO_MARVEL
)<IHero>();
