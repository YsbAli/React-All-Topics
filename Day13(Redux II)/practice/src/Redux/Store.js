
import { legacy_createStore as CreateStore } from 'redux'
import { Reducer } from './Reducer'


export const store = CreateStore(Reducer, { counter: 0, todo: [] })

// store.subscribe(() => {
//     console.log("The initial Value is ", store.getState())
// })
