//action is an object with a key called type, to define what type of action it is. it has payload etc...
// action creator is a function which return an object 

import { ADD_COUNTER, REDUCE_COUNTER } from "./ActionType"

const AddCounter = (payload) => {
    return {
        type: ADD_COUNTER,
        payload
    }
}

const ReduceCounter = (payload) => {
    return {
        type: REDUCE_COUNTER,
        payload
    }
}


export { AddCounter, ReduceCounter }