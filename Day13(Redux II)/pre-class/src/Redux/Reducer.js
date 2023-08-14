import { ADD_TODO } from "./ActionType"

const initialState = {
    todos: [
        {
            id: 1,
            title: "Learn Redux",
            status: true

        }
    ]
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, payload] }
        default:
            return state
    }
}