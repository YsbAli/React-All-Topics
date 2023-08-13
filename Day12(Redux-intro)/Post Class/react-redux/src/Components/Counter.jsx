import React from 'react'
import { Store } from '../Redux/Store'
import { AddCounter, ReduceCounter } from '../Redux/Action'

function Counter() {
  const {counter} = Store.getState()
  const {dispatch} = Store
  return (
    <div>
      Counter Value: {counter}
      <button onClick={()=>{dispatch(AddCounter(1))}}>ADD</button>
      <button onClick={()=>{dispatch(ReduceCounter(1))}}>Reduce</button>
    </div>
  )
}

export default Counter
