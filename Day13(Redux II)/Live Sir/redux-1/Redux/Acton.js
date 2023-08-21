

//Action type

export const ADD_COUNT = "ADD_COUNT"

//Action Creator  -- reuseability,, readability

export const AddCount = (data) => {
    return {
        type: ADD_COUNT,
        payload: data
    }
}




