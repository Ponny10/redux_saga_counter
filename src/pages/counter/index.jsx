import React from "react";
import { connect } from "react-redux";

import { actionsReducer as actions } from "../../reducers";
import "./style.css";

const Counter = (props) => {

    const {
        counterDecrement,
        counterIncrement,
        counterReset,
        counterValue,
    } = props;

    return (
        <>
            <div>
                <p style={{ color: "white", fontSize: 60 }}>Counter with React and React Redux</p>
                <p className="counterState">{counterValue}</p>
                <div className="container_buttons">
                    <button onClick={() => counterDecrement()} className="button">-</button>
                    <button onClick={() => counterReset()} className="button">Reset</button>
                    <button onClick={() => counterIncrement()} className="button">+</button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    counterValue: state.counter.counter.counterState,
});

const mapDispatchToProps = (dispatch) => ({
    counterDecrement: () => dispatch({
        type: actions.counter.counter.SAGA_COUNTER_DECREMENT,
        payload: 1,
    }),
    counterIncrement: () => dispatch({
        type: actions.counter.counter.SAGA_COUNTER_INCREMENT,
        payload: 1,
    }),
    counterReset: () => dispatch({
        type: actions.counter.counter.COUNTER_RESET,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);