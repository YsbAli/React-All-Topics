

// import { legacy_createStore } from "redux"

import { legacy_createStore  as createStore} from "redux"

// const store = legacy_createStore() 

const store = createStore()

console.log(store)










const Reducer = (store, action)=>{
    if(action.type === "ADD_COUNT"){
        return {...store, counter : store.counter + action.payload}
    }
}