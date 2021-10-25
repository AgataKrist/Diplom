import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";

import { rootSaga } from "./saga";

import { IState } from "./types";

const sagaMiddleware = createSagaMiddleware();

export const store: Store<IState> = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const initialRootState = {
	...store.getState(),
};

sagaMiddleware.run(rootSaga);
