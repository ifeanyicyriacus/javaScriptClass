import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./counterSlice.jsx";

const Counter = () => {

    // const  count = useSelector(state => state.counter.value);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch()

    function reduceCounter() {
        dispatch(decrement())
    }

    function increaseCounter() {
            dispatch(increment())
    }
    // 62.173.45.70
    function resetCounter() {
        dispatch(reset())
    }

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={reduceCounter}>-</button>
                <button onClick={increaseCounter}>+</button>
                <button onClick={resetCounter}>reset</button>
            </div>
        </>
    )
}

export default Counter

