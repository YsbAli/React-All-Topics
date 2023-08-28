
// import { legacy_createStore as CreateStore } from 'redux'
// import { Reducer } from './Reducer'


// export const store = CreateStore(Reducer,  { counter: 0, todo: [] })



// install and use Redux-devtools 

// export const store = CreateStore(Reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )


//   initial state --->   { counter: 0, todo: [] }    ---> this initial state will go to the reducer and pass it to the store as default arguments
// store.subscribe(() => {
//     console.log("The initial Value is ", store.getState())
// })






///-----------Combine Reducer Part -------------------



import { legacy_createStore as CreateStore, combineReducers } from 'redux'
import { CounterReducer } from './Counter/Reducer'
import { TodoReducer } from './Todo/Reducer'

//for CounterReducer
// export const store = CreateStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//for TodoReducer

// export const store = CreateStore(TodoReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// )


//Combine Reducer.....



const RootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer
})

export const store = CreateStore(RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log("State", store.getState())

//output will be : -- counter: {counter: 0}todos: {todos: Array(0)}
