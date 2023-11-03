export const actionTypes = {
    SAGA_COUNTER_DECREMENT: 'SAGA_COUNTER_DECREMENT',
    SAGA_COUNTER_INCREMENT: 'SAGA_COUNTER_INCREMENT',
    COUNTER_DECREMENT: 'COUNTER_DECREMENT',
    COUNTER_INCREMENT: 'COUNTER_INCREMENT',
    COUNTER_RESET: 'COUNTER_RESET',
};

const initialState = {
    counterState: 10,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_DECREMENT:
            return {
                ...state,
                counterState: action.payload,
            }
        case actionTypes.COUNTER_INCREMENT:
            return {
                ...state,
                counterState: action.payload,
            }
        case actionTypes.COUNTER_RESET:
            return initialState;
        default:
            return state;
    };
};