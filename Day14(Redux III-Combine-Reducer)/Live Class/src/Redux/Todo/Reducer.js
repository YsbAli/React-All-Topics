
import { ADD_TODO } from "./Action"

//store = {todos : []}
const initial_State = { todos: [] }

export const TodoReducer = (store = initial_State, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            // return { ...store, todos: [...store.todos, payload] }
            // we don't need to add previous data,,, just need the data for showing into UI
            return { ...store, todos: payload }
        default: return store
    }
}