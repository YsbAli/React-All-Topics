
export const ADD_TODO =  "ADD_TODO"


//action creator
export const  AddTodo = (payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
} 