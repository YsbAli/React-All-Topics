import { ADD_COUNT } from "./Acton";

export const CounterReducer = (store, { type, payload }) => {                                            // store is like ---->store: {counter : 0},,, store.counter = current value,,, payload = 1
    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }
        default: 
        return store    
    }
}