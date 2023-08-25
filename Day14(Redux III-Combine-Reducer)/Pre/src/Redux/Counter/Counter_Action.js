export const ADD_COUNT = "ADD_COUNT"
export const SUB_COUNT = "SUB_COUNT"


//action creator
export const AddCount = (data) => ({ type: ADD_COUNT, payload: data })
export const SubCount = (data) => ({ type: SUB_COUNT, payload: data })




//action creators
// export const AddCount = (data) => {
//     return {
//         type: ADD_COUNT,
//         payload: data
//     }
// }
