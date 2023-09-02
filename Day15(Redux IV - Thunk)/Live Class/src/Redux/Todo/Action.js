export const ADD_TODO = "ADD_TODO"

export const AddTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}



// export const getData = async () => {
//     fetch("http://localhost:3000/todos")
//         .then((x) => x.json())
//         .then((data) => {
//             dispatch(AddTodo(data))
//         })
// }

// ....but above function will not work,,
//our main goal is to make a async function as an action

// and whenever we call that action it will return an async funtion,, and 

// export const getData = ()=> async ()=>{
//     const data = await fetch('http://localhost:3000/todos').then((x)=>x.json())

// }


//but redux will not allow action as function ,, so it will throw error,,,for that we have to call action function conditionally in the middleware,,,

// export const getData  = ()=> async ()=>{

//     const data = await fetch("http://localhost:3000/todos").then((x)=>x.json())
// }



//but we need to dispatch the action ,,,so for that we need dispatch, but dispatch is in the middleware,,,,
// so for that, we have to call dispatch in middleware in the action,,,like:    action(store.dispatch)


export const getData = ()=> async (dispatch)=>{
    //  ...calculation
    const data = await fetch("http://localhost:3000/todos").then((x)=> x.json())
    dispatch(AddTodo(data))
}


//passing dispatch here because, we have to, call the dispatch in function calling in the middleware