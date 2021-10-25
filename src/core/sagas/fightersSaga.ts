import { IHero } from "./../../types/index";
import {
	setFighterDCAction,
	setFighterMarvelAction,
} from "./../actions/fighterAction";
import { PublicService } from "./../../services/PublicService";
import { takeEvery } from "@redux-saga/core/effects";
import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put } from "redux-saga/effects";

function* getFightersSaga({ payload: { idCD, idMarvel } }: Action<any>) {
	try {
		const fighterCD: { data: any } = yield call(() =>
			PublicService.getHero(`${idCD}.json`)
		);
		const fighterMarvel: { data: any } = yield call(() =>
			PublicService.getHero(`${idMarvel}.json`)
		);

		yield put(setFighterDCAction(fighterCD.data));
		yield put(setFighterMarvelAction(fighterMarvel.data));
	} catch (e: any) {
		console.log(`e`, { e });
	}
}

export function* fightersSaga() {
	yield takeEvery(ACTIONS.GET_FIGHTERS, getFightersSaga);
}
