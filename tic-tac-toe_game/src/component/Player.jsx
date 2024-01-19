import { useState } from "react";

export default function Player({name, symbol}){
  const [isEdit, setIsEdit] =useState(false);
  
  
  function handleEditClick(){
    setIsEdit(isEdit=>!isEdit); 
  }

  let content= (<span className='player-name'>{name}</span>);

   if(isEdit){
    content=(<span className='player-name'><input type='text' value={name}/></span>)
   }
 

    return(
        <li>
            <span className='player'>
                {content}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdit?'Save':'Edit'}</button>
        </li>
    )

}