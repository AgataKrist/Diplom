import { IHero } from "./../../types/index";
import {
	setChoicedHeroDCAction,
	setChoicedHeroMarvelAction,
	setDCAction,
	setFilteredDCAction,
	setFilteredMarvelAction,
	setHeroAction,
	setHeroesDCAction,
	setHeroesDCSliderAction,
	setHeroesMarvelAction,
	setHeroesMarvelSliderAction,
	setMarvelAction,
	setPaginationDCAction,
	setPaginationMarvelAction,
} from "./../actions/heroesAction";
import { PublicService } from "./../../services/PublicService";
import { takeEvery } from "@redux-saga/core/effects";
import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put } from "redux-saga/effects";

function* getHeroesSaga({ payload: { path } }: Action<any>) {
	yield put(setHeroesDCAction(null));
	yield put(setHeroesMarvelAction(null));
	yield put(setHeroesDCSliderAction({ prev: 0, next: 6 }));
	yield put(setHeroesMarvelSliderAction({ prev: 0, next: 6 }));
	yield put(setChoicedHeroDCAction(null));
	yield put(setChoicedHeroMarvelAction(null));
	try {
		const data: { data: any } = yield call(() =>
			PublicService.getHeroes(path)
		);
		const DC = data.data.reduce((acc: IHero[], hero: IHero) => {
			return hero.biography.publisher === "DC Comics"
				? [...acc, hero]
				: acc;
		}, []);
		const Marvell = data.data.reduce((acc: IHero[], hero: IHero) => {
			return hero.biography.publisher === "Marvel Comics"
				? [...acc, hero]
				: acc;
		}, []);

		yield put(setHeroesDCAction(DC));
		yield put(setHeroesMarvelAction(Marvell));
	} catch (e: any) {
		console.log(`e`, { e });
	}
}
function* getDCSaga({ payload: { path, pagination } }: Action<any>) {
	yield put(setDCAction(null));
	yield put(setFilteredDCAction(null));

	yield put(
		setPaginationDCAction({
			...pagination,
			loading: true,
		})
	);
	try {
		const data: { data: any } = yield call(() =>
			PublicService.getHeroes(path)
		);
		const DC = data.data.reduce((acc: IHero[], hero: IHero) => {
			return hero.biography.publisher === "DC Comics"
				? [...acc, hero]
				: acc;
		}, []);

		yield put(setDCAction(DC));
		yield put(setFilteredDCAction(DC));
		yield put(
			setPaginationDCAction({
				...pagination,
				loading: false,
				currentPage: 1,
			})
		);
	} catch (e: any) {
		console.log(`e`, { e });
	}
}
function* getMarvelSaga({ payload: { path, pagination } }: Action<any>) {
	yield put(setMarvelAction(null));
	yield put(setFilteredMarvelAction(null));

	yield put(
		setPaginationMarvelAction({
			...pagination,
			loading: true,
		})
	);

	try {
		const data: { data: any } = yield call(() =>
			PublicService.getHeroes(path)
		);
		const marvel = data.data.reduce((acc: IHero[], hero: IHero) => {
			return hero.biography.publisher === "Marvel Comics"
				? [...acc, hero]
				: acc;
		}, []);

		yield put(setMarvelAction(marvel));
		yield put(setFilteredMarvelAction(marvel));

		yield put(
			setPaginationMarvelAction({
				...pagination,
				loading: false,
				currentPage: 1,
			})
		);
	} catch (e: any) {
		console.log(`e`, { e });
	}
}

function* getHeroSaga(id: Action<number>) {
	try {
		const hero: { data: any } = yield call(() =>
			PublicService.getHero(`${id.payload}.json`)
		);

		yield put(setHeroAction(hero.data));
	} catch (e: any) {
		console.log(`e`, { e });
	}
}

export function* heroesSaga() {
	yield takeEvery(ACTIONS.GET_HEROES, getHeroesSaga);
	yield takeEvery(ACTIONS.GET_DC, getDCSaga);
	yield takeEvery(ACTIONS.GET_MARVEL, getMarvelSaga);
	yield takeEvery(ACTIONS.GET_HERO, getHeroSaga);
}
