import { useState } from 'react'
import './App.css'
import Counter from './counterclass'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counterfunction from './counterfunction';

function App() {

  const [cnt, setCnt] = useState(0)

  const Increment = () => {
      setCnt(cnt + 1)
  }

  const Decrement = () => {
      setCnt(cnt - 1)
  }
  
  const reset = () => {
      setCnt(0)
  }

  return (
    <>
      <Counter/>
      <Counterfunction
      cnt = {cnt}
      Increment = {Increment}
      Decrement = {Decrement}
      reset = {reset}
      />
    </>
  )
}

export default App
