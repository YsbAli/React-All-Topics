import { ADD_COUNT } from "./Action"


//store = {counter : 0}
const initial_State = { counter: 0 }

export const CounterReducer = (store = initial_State, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }
        default: return store
    }

}