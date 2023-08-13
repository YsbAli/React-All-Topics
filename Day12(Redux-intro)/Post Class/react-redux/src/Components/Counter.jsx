import React, { useContext } from 'react'
// import { Store } from '../Redux/Store'
import { AddCounter, ReduceCounter } from '../Redux/Action'
import { AppContext } from '../Redux/AppContextProvider'

function Counter() {
  // const {counter} = Store.getState()
  // const {dispatch} = Store
  const {dispatch, getState} = useContext(AppContext)
  const {counter} = getState()


  const ADD = ()=>{
    dispatch(AddCounter(1))
  }
  const Reduce = ()=>{
    dispatch(ReduceCounter(1))
  }
  
  return (
    <div>
      Counter Value: {counter}
      {/* <button onClick={()=>{dispatch(AddCounter(1))}}>ADD</button>
      <button onClick={()=>{dispatch(ReduceCounter(1))}}>Reduce</button> */}
      <button onClick={ADD}>ADD</button>
      <button onClick={Reduce}>Reduce</button>
    </div>
  )
}

export default Counter
