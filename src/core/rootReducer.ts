import { getHeroReducer } from "./reducers/getHeroReducer";
import { combineReducers } from "redux";
import {
	dcReducer,
	marvelReducer,
	getFightersReducer,
	getHeroesReducer,
	gameReducer,
} from "./reducers";

export const rootReducer = combineReducers({
	heroes: getHeroesReducer,
	fighters: getFightersReducer,
	game: gameReducer,
	dc: dcReducer,
	marvel: marvelReducer,
	hero: getHeroReducer,
});
