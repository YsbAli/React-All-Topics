
//action types
export const ADD_COUNT = "ADD_COUNT"
export const ADD_TODO = "ADD_TODO"

//action creators
export const AddCount = (data) => {
    return {
        type: ADD_COUNT,
        payload: data
    }
}


export const AddTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}