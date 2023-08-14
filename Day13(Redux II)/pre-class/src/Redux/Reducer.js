const initialState = {
    todos: [
        {
            id: 1,
            title: "Learn Redux",
            status: true

        }
    ]
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}