

/*

// // import { legacy_createStore } from "redux"

// import { legacy_createStore  as createStore} from "redux"

// // const store = legacy_createStore() 

// const store = createStore()       // it will throw an error,,,,we have to pass the reducer function inside createStore,,,,,,the error is--- Expected the root reducer to be a function. Instead, received: '" +kindOf(reducer) + "'");


// console.log(store)           // it will trow an error ,,, we have to define the module,, because we can't define import outside the module... so in package.json file just mention "type" : "module"




// const Reducer = (store, action)=>{
//     if(action.type === "ADD_COUNT"){
//         return {...store, counter : store.counter + action.payload}
//     }
// }



import { legacy_createStore as createStore } from 'redux'



//reducer represents how to update the store
const Reducer = (store, action) => {
    if (action.type === "ADD_COUNT") {
        return { ...store, counter: store.counter + action.payload }
    }
    // return { ...store }               // we have to always return something...   because reducer always return something,,,,
    return store;
}



// this is our apps initial state,,, we have to define it,,, no matter how many variable or state are there

// const initState = {
//     counter: 10
// }


const initState = {
    counter: 0,
    todos: [],
    theme: "dark",
    price: 0
}

// const store = createStore(Reducer)     // via this store and reducer getting connected

const store = createStore(Reducer, initState)

// console.log(store, store.getState())      // getState()  ---> will always return the current state of the store or app
console.log(store)


console.log(store.getState())              // getState will always give the current state so the output will be ,,,, {counter : 0 }

// the output is :

// {
//     dispatch: [Function: dispatch],
//     subscribe: [Function: subscribe],
//     getState: [Function: getState],
//     replaceReducer: [Function: replaceReducer],
//     '@@observable': [Function: observable]
//   }

// so in store we have those 4 function but we need only dispatch() and getState() 




*/




// soo the fresh code is      ------


/*

import { legacy_createStore as createStore } from 'redux';


const Reducer = (store, action) => {
    if (action.type === "ADD_COUNT") {
        return { ...store, counter: store.counter + action.payload }
    }

    return store;
}


const initState = {
    counter: 0,
    theme: 'dark',
    todos: [],
    price: 0
}

const store = createStore(Reducer, initState)
console.log(store)           // output will be those four function


console.log("initial Store", store.getState())                        // { counter: 0, theme: 'dark', todos: [], price: 0 }



//dispatch

// dispatch takes an action 

store.dispatch({type: "ADD_COUNT", payload: 2})

console.log("initial Store", store.getState())            //initial Store { counter: 0, theme: 'dark', todos: [], price: 0 }
console.log("After Dispatch" , store.getState())         // After Dispatch { counter: 2, theme: 'dark', todos: [], price: 0 }


*/



// Now Adding new state and updating it with new action 






import { legacy_createStore as createStore } from "redux";



const initState = {
    counter: 0,
    todos: []
}

const Reducer = (store, action) => {
    if (action.type === "ADD-COUNT") {
        return { ...store, counter: store.counter + action.payload }
    }

    // todos Logic,,,
    if (action.type === "ADD_TODOS") {
        return { ...store, todos: [...store.todos, action.payload] }
    }

    return store;


}


const Store = createStore(Reducer, initState)

console.log("initial State", Store.getState())          // initial State { counter: 0, todos: [] }



// dispatch for counter 


Store.dispatch({ type: "ADD-COUNT", payload: 1 })




// dispatch for todos,,,

Store.dispatch({ type: "ADD_TODOS", payload: { title: "Reading", status: true } })

// one More Todos ... 

Store.dispatch({ type: 'ADD_TODOS', payload: { title: "Writing", state: false } })



console.log("After Dispatch", Store.getState())              // After Dispatch { counter: 0, todos: [ { title: 'Reading', status: true } ] }
