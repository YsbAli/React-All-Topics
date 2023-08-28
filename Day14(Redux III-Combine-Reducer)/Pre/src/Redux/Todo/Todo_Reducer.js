import { ADD_TODO } from "./Todo_Action";


export const Todo_Reducer = (store = { todo: [] }, { type, payload }) => {

    switch (type) {
        case ADD_TODO:
            return { ...store, todo: [...store.todo, payload] }
        default:
            return store
    }

}

