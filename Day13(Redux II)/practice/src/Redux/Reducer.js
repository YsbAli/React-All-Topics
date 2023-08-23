import { ADD_COUNT, ADD_TODO } from "./Action";


export const Reducer = (store, { type, payload }) => {

    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }

        case ADD_TODO:
            return { ...store, todo: [...store.todo, payload] }
        default:
            return store
    }

}

