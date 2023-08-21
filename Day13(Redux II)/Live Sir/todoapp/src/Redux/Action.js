// Action Type

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"


// Action Creators
export const AddTodo = (data) => {
    return {
        type: ADD_TODO,
        // payload:{
        //can write like this also
        // }
        payload: data
    }
}


export const DeleteTodo = (data) => {
    return {
        type: DELETE_TODO,
        payload: data
    }
}
