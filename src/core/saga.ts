import { all } from "redux-saga/effects";
import { fightersSaga, heroesSaga } from "./sagas";

export function* rootSaga() {
	try {
		yield all([heroesSaga(), fightersSaga()]);
	} catch (e) {
		console.log(`e`, e);
	}
}
