import { legacy_createStore as CreateStore } from 'redux'
import { TodoReducer } from './Reducer'


export const Store = CreateStore(TodoReducer, { todos: [] })




//Multiple State Store

// export const Store = CreateStore(Reducer, { counter : 0, todo:[]})