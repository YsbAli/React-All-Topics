
// chenging action name into variable
const ADD_COUNTER = "ADD_COUNTER";
const ADD_TODOS = "ADD_TODOS";
const TOGGLE_THEME = "TOGGLE_THEME"


//action Creators:

//for todos
const AddTodos = (title) => {
    return {
        type: ADD_TODOS,
        payload: {
            title: title,
            status: true
        }
    }
}


// for counter 
const Counter = (value) => {
    return {
        type: ADD_COUNTER,
        payload: value
    }

}
