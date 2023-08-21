// Action Type

export const ADD_TODO = "ADD_TODO"


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

