import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';

import RootSagas from './middleware';
import Reducers from './reducers';

const SagaMiddleware = createSagaMiddleware();

const Store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(SagaMiddleware)),
);

export default Store;

SagaMiddleware.run(RootSagas);