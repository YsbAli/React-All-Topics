import { ADD_COUNT } from "./Action";


export const Reducer = (store, { type, payload }) => {

    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }


        default:
            return store
    }

}

