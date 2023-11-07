import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount]=useState(15);  // this is hooks useState it change UI state without dom and change everywhere

  const add=()=>{
    setCount(count+1);
  }

  const remove=()=>{
    setCount(count-1);
  }


  return (
    <>
     <h1>counter project || Kamal </h1>
    <h2>counter value : {count} </h2>
    <br></br>
    <button onClick={add}>add counter {count}</button>
    <br></br>
    <button onClick={remove}>remove counter {count}</button>
    <p>footer: {count}</p>
    </>
  )
}

export default App
