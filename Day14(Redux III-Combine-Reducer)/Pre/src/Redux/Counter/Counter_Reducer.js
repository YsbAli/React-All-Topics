import { ADD_COUNT } from "./Counter_Action";


// export const Counter_Reducer = (store, { type, payload }) => {
//     switch (type) {
//         case ADD_COUNT:
//             return { ...store, counter: store.counter + payload }
//         default:
//             return store
//     }

// }



//Now we can give the initial state/value to the store by default,,, initailly store value will be undifined but after giving initial value to store ,,, the initial state value will be the store initial value or by default value,,,,,Liek::--


export const Counter_Reducer = (store = { counter: 0 }, { type, payload }) => {
    switch (type) {
        case ADD_COUNT:
            return { ...store, counter: store.counter + payload }
        default:
            return store
    }

}
