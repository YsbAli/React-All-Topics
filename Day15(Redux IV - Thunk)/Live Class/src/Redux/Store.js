
/* Starts Middleware before Thunk 

import { legacy_createStore as CreateStore, applyMiddleware, combineReducers } from 'redux'
import { CounterReducer } from './Counter/Reducer'
import { TodoReducer } from './Todo/Reducer'





const RootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer,
    // auth : AuthReducer 
})


// const middleWare = (store)=>{
//     return (next)=>{
//         return (action)=>{


//         }

//     }
// }

//this is function Currying---can be called clousers also,,,,
// when a function return a function that function is called function currying




//  function middleWare (store){
//     return function (next){
//         return function (action){}
//     }
//  }


// the shorter way to write middleware in ES6 is 

// const middleWare = (store) => (next) => (action) => {
//     //your code here...
//     console.log("Action", action)  
//     //we have to call next here for go to next code or next line,,, and pass the action 
//     next(action)

//     //the only thing  different from express middleware is,, express next() will automatically call the req, resp and all that things, we don't have to pass anything,,, ,
//     //  but in  redux middleware, we have to pass action
// }


// const middleware1 = (store) => (next) => (action) => {

//     console.log("Entering MW1")
//     next(action)
//     console.log("Exiting MW1")
// }

// const middleWare2 = (store) => (next) => (action) => {
//     console.log("Entering MW2")
//     next(action)
//     console.log("Exiting MW2")
// }




// // Output will be :  ---
// Entering MW1
// Extering MW2
// Exiting MW2
// Exiting MW1






// export const store = CreateStore(RootReducer,
//     // applyMiddleware(middleWare)                   //it can accept any number of middleware

//     applyMiddleware(middleware1, middleWare2)



//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// console.log("State", store.getState())










//calling action conditionally,,,,,

const middleWare = (store) => (next) => (action) => {
    if ( typeof action === "function") {
      return action(store.dispatch)              //store.dispatch for getting the dispatch
    }

    next(action)
}




export const store = CreateStore(RootReducer,
    applyMiddleware(middleWare)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)





//  Ends Of MiddleWare

*/







// Starts Thunk Starts



import { legacy_createStore as CreateStore, applyMiddleware, combineReducers } from 'redux'
import { CounterReducer } from './Counter/Reducer'
import { TodoReducer } from './Todo/Reducer'
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer,
    // auth : AuthReducer 
})


// const middleWare = (store) => (next) => (action) => {
//     if ( typeof action === "function") {
//       return action(store.dispatch)              //store.dispatch for getting the dispatch
//     }

//     next(action)
// }




export const store = CreateStore(RootReducer,
    // applyMiddleware(middleWare)
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)