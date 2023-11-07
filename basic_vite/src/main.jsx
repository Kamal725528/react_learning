import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*const reactElement={
  tag:'a',
  props:{
      href:"https://google.com",
      target:"_blank"
  },
  children:'click me to visit google'
 } */  //this is not the right syntax of reactElement so it can't render this

//  const anotherElement=(<a href='https://google.com' target='_blank'>click me to google</a>)

const username='kamal';

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  username  //also insert variable

)  // this is the right way how react element be create



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

    /* App()   // this also work
    reactElement // this doesn't work
     anotherElement  // or <anotherElement/>  // this work as it match the right syntax

    reactElement // this work
    */

)
