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

const middleWare = (store) => (next) => (action) => {
    //your code here...
    console.log("Action", action)  
    //we have to call next here for go to next code or next line,,, and pass the action 
    next(action)

    //the only thing  different from express middleware is,, express next() will automatically call the req, resp and all that things, we don't have to pass anything,,, ,
    //  but in  redux middleware, we have to pass action
}


export const store = CreateStore(RootReducer,
    applyMiddleware(middleWare)                   //it can accept any number of middleware
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log("State", store.getState())