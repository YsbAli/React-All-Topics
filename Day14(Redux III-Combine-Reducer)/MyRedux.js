//All the features that we learn in redux...


//for counter app...
const initial_State = {
    counter: 0
}


//action
const IncCounter = { type: "INC_COUNT", payload: 1 }


//reducer 
const reducer = (store, { type, payload }) => {
    switch (type) {
        case "INC_COUNT":
            return { counter: store.counter + payload }
        default: return store
    }

}

//

class Store {
    //todo:implement
    constructor(reducer, initial_State) {
        this.reducer = reducer;
        this.store = initial_State
    }

    //implementing getState() method
    getState() {
        return this.store
    }

    dispatch(action) {
        this.store = this.reducer(this.store, action)
    }

}


//store.state
const MyStore = new Store(reducer, initial_State)
// console.log(MyStore)    // Store { reducer: [Function: reducer], initialValue: { counter: 0 } }

console.log(MyStore.getState())
MyStore.dispatch(IncCounter)
MyStore.dispatch(IncCounter)
console.log(MyStore.getState())          //{ counter: 0 }
MyStore.dispatch(IncCounter)

console.log(MyStore.getState()) 