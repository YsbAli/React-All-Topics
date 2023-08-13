
import { useContext } from 'react'
import './App.css'
import Counter from './Components/Counter'
import { AppContext } from './Redux/AppContextProvider'

function App() {
  const {getState} = useContext(AppContext)

  const {counter} = getState()

  return (
    <>
      <h1>React-redux</h1>
      <Counter/>

      <div>{counter}</div>
    </>
  )
}

export default App
