
// import { ADD_TODO, SORT } from "./Action"

// //store = {todos : []}
// const initial_State = { todos: [] }

// export const TodoReducer = (store = initial_State, { type, payload }) => {
//     switch (type) {
//         case ADD_TODO:
//             // return { ...store, todos: [...store.todos, payload] }
//             // we don't need to add previous data,,, just need the data for showing into UI
//             return { ...store, todos: payload }
//         case SORT:
//             return { ...store, todos: [...store.todos].sort((a, b) => a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0) }
//         default:
//             return store
//     }
// }









// Sort Features  : -- sort is in place, and sort function returns incorrectly

import { ADD_TODO, FILTER, SORT } from "./Action"

const initial_State = { todos: [] }

export const TodoReducer = (store = initial_State, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: payload }
        case SORT:
            return { ...store, todos: [...store.todos].sort((a, b) => a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0) }
        case FILTER:
            return { ...store, todos: store.todos.filter((e) => e.type.includes(payload)) }
        default:
            return store
    }
}



//in sort 


//but this filter will give the output but after that it will not go back into prev state...
//  So to overcome this we can use simple useState hook,,,