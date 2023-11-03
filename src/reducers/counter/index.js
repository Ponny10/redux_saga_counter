import { combineReducers } from 'redux';

import Counter, { actionTypes as actionsCounter } from './counter';

export const actionTypes = {
    counter: actionsCounter,
};

export default combineReducers({
    counter: Counter,
});