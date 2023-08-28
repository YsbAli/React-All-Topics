import { legacy_createStore as CreateStore, combineReducers } from 'redux'
import { Counter_Reducer } from './Counter/Counter_Reducer'
import { Todo_Reducer } from './Todo/Todo_Reducer'
// import { Reducer } from './Reducer'    // previous whole reducer in one 


// export const store = CreateStore(Reducer, { counter: 0, todo: [] })             // Previously we have done that with the help of one reducer,,,, but now we are trying to implement the best way to run more than one reducer,,, that's it,,,



// // export const store = CreateStore(Counter_Reducer, { counter: 0, todo: [] })     // it's for counter reducer which will work only for counter ,,, now lets see  how we can work togather with the both reducer
// export const store = CreateStore(Todo_Reducer, { counter: 0, todo: [] })
// console.log("Initial State", store.getState())

// store.subscribe(() => {
//     console.log("The initial Value is ", store.getState())
// })





//  Now lets separate the initial value to each reducer like in todo reducer we can separate the initial state to the todo reducer state and so on,,,like this

// export const store = CreateStore(Todo_Reducer)
// export const store = CreateStore(Counter_Reducer)




//Now let's see how we can combine our reducers into one reducer,,,,
// so there is a utility function given by redux it self which will combine our reducers and it will give us one reducer which will be given to CreateStore ,,,,
// let see  ----

const rootReducer = combineReducers({
    CounterKey: Counter_Reducer,
    TodoKey: Todo_Reducer

    //Can add multiple reducer heree,, as many as we can,


})


export const store = CreateStore(rootReducer)




//rootReducer name can be anything like oneReducer or taskReducer etc....