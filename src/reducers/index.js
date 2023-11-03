import { combineReducers } from 'redux';
import Counter, { actionTypes } from './counter';

export const actionsReducer = {
    counter: actionTypes,
};

export default combineReducers({
    counter: Counter,
});