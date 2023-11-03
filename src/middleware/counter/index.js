import { call, put, select } from 'redux-saga/effects';
import Request from './request';

import { actionsReducer as actions } from '../../reducers';

const getCounter = (state) => state.counter.counter;

export function* CounterDecrement(data) {
    const { counterState } = yield select(getCounter);
    const responseRestNumbers = yield call(Request.responseRestNumber, {
        counterState,
        numberArgument: data.payload,
    });
    yield put({
        type: actions.counter.counter.COUNTER_DECREMENT,
        payload: responseRestNumbers,
    });
}

export function* CounterIncrement(data) {
    const { counterState } = yield select(getCounter);
    const responseSumNumbers =  yield call(Request.responseSumNumber, {
        counterState,
        numberArgument: data.payload,
    });
    yield put({
        type: actions.counter.counter.COUNTER_INCREMENT,
        payload: responseSumNumbers,
    });
}