import { useState } from "react"


function App() {
   
  const [color, setColor]=useState("lavender");

  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl ">

          <button  onClick={()=>setColor('red')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={()=>setColor('green')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"green"}}>Green</button>

          <button onClick={()=>setColor('yellow')} className="outline-none rounded-full shadow-lg px-4 py-1 text-black" 
          style={{backgroundColor:"yellow"}}>Yellow</button>

        <button onClick={()=>setColor('purple')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"purple"}}>Purple</button>

        <button onClick={()=>setColor('blue')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=>setColor('gray')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"gray"}}>Gray</button>

        <button onClick={()=>setColor('olive')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"olive"}}>Olive</button>

        <button onClick={()=>setColor('orange')} className="outline-none rounded-full shadow-lg px-4 py-1 text-white" 
          style={{backgroundColor:"orange"}}>Orange</button>




        </div>
      </div>
    </div>

  )
}

       

export default App
