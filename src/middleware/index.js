import { takeLatest, fork } from "redux-saga/effects";

import { actionsReducer as actions } from "../reducers";
import * as counter from './counter';

function* Counter() {
    yield takeLatest(actions.counter.counter.SAGA_COUNTER_DECREMENT, counter.CounterDecrement);
    yield takeLatest(actions.counter.counter.SAGA_COUNTER_INCREMENT, counter.CounterIncrement);
}

export default function* rootSagas() {
    yield fork(Counter);
}