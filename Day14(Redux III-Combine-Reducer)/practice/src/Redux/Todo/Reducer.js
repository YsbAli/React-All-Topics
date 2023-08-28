
import { ADD_TODO } from "./Action"

//store = {todos : []}
const initial_State = { todos: [] }

export const TodoReducer = (store = initial_State, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: [...store.todos, payload] }
        default: return store
    }
}