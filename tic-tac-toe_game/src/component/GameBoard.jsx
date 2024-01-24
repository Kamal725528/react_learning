import { useState } from "react"
export default function Gameboard({onSelect, board}){


    // const[gameBoard, setGameBoard]=useState(initialBoard);

    // function handleClick(rowIndex, colIndex){
    //     setGameBoard(prevBoard=>{
    //         let updatedBoard=[...prevBoard].map(col=>[...col]);    //this is immutable way
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelect();
    // }

    return(
        <ol id='game-board'>
            {board.map((row, rowIndex)=><li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex)=><li key={colIndex}>
                 <button onClick={()=>onSelect(rowIndex, colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                </li>)}
              </ol>
            </li>)}
        </ol>
    )

}