// import { createStore } from 'redux'

import { legacy_createStore as CreateStore } from 'redux'    //redux-toolkit
import { CounterReducer } from './Reducer'


// CreateStore will take reducer and initial state
export const Store = CreateStore(CounterReducer, { counter: 0 })


//subscribe function will notification on chenging store value,, whenever store value change this function will get call

// Store.subscribe(() => {
//     console.log(Store.getState());
// });

