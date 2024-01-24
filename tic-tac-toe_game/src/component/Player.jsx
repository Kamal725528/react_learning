import { useState } from "react";

export default function Player({initialName, symbol, isActive, onPlayerChange}){
  const [isEdit, setIsEdit] =useState(false);
  const [playerName, setPlayerName]= useState(initialName);
  
  
  function handleEditClick(){
    setIsEdit(isEdit=>!isEdit); 

    if(isEdit){
      onPlayerChange(symbol, playerName);
    }
  }

  function handleChange(e){
    setPlayerName(e.target.value);
  }

  let content= (<span className='player-name'>{playerName}</span>);

   if(isEdit){
    content=(<span className='player-name'>
        <input type='text' required value={playerName} onChange={handleChange}/></span>)
   }
 

    return(
        <li className={isActive?'active':undefined}>
            <span className='player'>
                {content}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEdit?'Save':'Edit'}</button>
        </li>
    )

}