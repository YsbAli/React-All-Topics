export const ADD_TODO = "ADD_TODO"

export const AddTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}

