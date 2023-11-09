import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  
// let mac={name:"mackbook", btn:"read"};
// let sam={name:"samsung", btn:"buy now"}

  return (
   <>
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
    <Card name="macbook" btn="buy now" />
    <Card name="samsung" btn="read" />
    
   </>
  )
}

export default App
