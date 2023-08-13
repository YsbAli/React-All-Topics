
// Reducer a function which takes state and action 

import { ADD_COUNTER, REDUCE_COUNTER } from "./ActionType"

const initialState = {
    counter: 1
}


const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + payload
            }
        case REDUCE_COUNTER:
            return {
                ...state,
                counter: state.counter - payload
            }

        default:
            return state

    }

}

export { Reducer }