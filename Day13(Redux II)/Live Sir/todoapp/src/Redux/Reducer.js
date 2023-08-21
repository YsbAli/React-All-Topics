import { ADD_TODO } from "./Action";


export const TodoReducer = ((store, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: [...store.todos, payload] }
        default:
            return store    
    }
})



// //Multiple Task Reducer
// export const Reducer = ((store, { type, payload }) => {
//     switch (type) {
//         case ADD_TODO:
//             return { ...store, todos: [...store.todos, payload] }
//         case ADD_COUNT :
//             return {...StaticRange, counter : store.counter + payload}
//     }
// })