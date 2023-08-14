const Reducer = (store, action) => {
    switch (action.type) {
        case ADD_COUNT: return { ...store, counter: store.counter + action.payload }
        case ADD_TODOS: return { ...store, todos: [...store.todos + action.payload ]}
        default: return store
    }
}