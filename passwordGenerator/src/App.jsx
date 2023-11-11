import { useState, useCallback, useEffect, useRef} from 'react'


function App() {

  const[length, setLength]=useState(6);
  const[numAllowed, setNumAllowed]=useState(false);
  const[charAllowed, setCharAllowed]=useState(false);
  const[password, setPassword]=useState("");
  const passref=useRef(null);  // useRef hooks

  const passwordGenerator= useCallback(()=>{
    let pass= "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num="0123456789";
    let char="!@#$%^&*()_{}?><";

    if(charAllowed) str+=char;
    if(numAllowed) str+=num;

    for(let i=1;i<=length;i++){
      let random=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(random);
    }

    setPassword(pass)

  },[length, numAllowed, charAllowed, setPassword])

  const copyToClipboard= useCallback(()=>{
    passref.current?.select();
    // passref.current?.setSelectionRange(0,5);  // only 5 char selected
    window.navigator.clipboard.writeText(password);

  },[password])


  useEffect(  ()=>{passwordGenerator()},
  [length, numAllowed, charAllowed, passwordGenerator]);
  

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 
    py-3 my-8 bg-gray-800 text-orange-500">
      
      <h1 className='text-white text-center my-3'>Password generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className="outline-none
         w-full py-1 px-3"
        placeholder='password'  readOnly  ref={passref}/>

        <button className='outline-none bg-blue-700 text-white
         px-3 py-0.5 shrink-0'
         onClick={copyToClipboard}>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>
       <input type='range' min={6} max={50} value={length}
       onChange={(e)=>setLength(e.target.value)} className='cursor-pointer' />
       <label>Length: {length}</label>
        </div>
         
         <div className='flex items-center gap-x-1' >
          <input type="checkbox"  defaultChecked={numAllowed} 
          onChange={()=>{setNumAllowed((prev)=>!prev)}} 
          id='numInput' /><label htmlFor="numInput">Numbers</label>
         </div>

         <div className='flex items-center gap-x-1' >
          <input type="checkbox" defaultChecked={charAllowed} 
          onChange={()=>{setCharAllowed((prev)=>!prev)}} id='charInput' />
          <label htmlFor="charInput">Characters</label>
         </div>

      </div>

      </div>
  )
}

export default App

/* defaultvalue nahi hoga defaultChecked hota hai for default value lene ke liye isi karan 
se wo ui mein change ni kar raha tha cuase ambiguityin return so kuchh return hi ni kar raha tha */