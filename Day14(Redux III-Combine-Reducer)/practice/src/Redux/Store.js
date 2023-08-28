
import { legacy_createStore as CreateStore } from 'redux'
import { Reducer } from './Reducer'


// export const store = CreateStore(Reducer,  { counter: 0, todo: [] })



// install and use Redux-devtools 

export const store = CreateStore(Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


//   initial state --->   { counter: 0, todo: [] }    ---> this initial state will go to the reducer and pass it to the store as default arguments
// store.subscribe(() => {
//     console.log("The initial Value is ", store.getState())
// })
