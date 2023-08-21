
// chenging action name into variable
export const ADD_COUNTER = "ADD_COUNTER";
export const ADD_TODOS = "ADD_TODOS";
export const TOGGLE_THEME = "TOGGLE_THEME"


//action Creators:

//for todos
export const AddTodos = (title) => {
    return {
        type: ADD_TODOS,
        payload: {
            title: title,
            status: true
        }
    }
}


// for counter 
export const Counter = (value) => {
    return {
        type: ADD_COUNTER,
        payload: value
    }
}
