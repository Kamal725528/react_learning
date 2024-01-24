import Player from './component/Player.jsx'
import Gameboard from './component/GameBoard.jsx'
import { useState } from 'react'
import Log from './component/Log.jsx'
import { WINNING_COMBINATIONS } from './component/game-winning.js'
import GameOver from './component/GameOver.jsx'

const PLAYERS={
  'X':'Player 1',
  'O':'Player 2'
}

const INITIAL_BOARD=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveGameBoard(gameTurns){
 // let gameBoard=INITIAL_BOARD;// if we are doing this then rematch won't work so we have to reset the board too. using deep copy
  let gameBoard=[...INITIAL_BOARD.map(array=>[...array])]; // deep copy

  for(const turn of gameTurns){
      const {square, player}=turn;
      const {row, col}=square;

      gameBoard[row][col]=player;
  }

  return gameBoard;
}

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';

      if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='O';
      }

      return currentPlayer;
}

function deriveWinners(gameBoard, player){
  let winner=null;
  
  for(const combination of WINNING_COMBINATIONS){
    let firstSquare= gameBoard[combination[0].row][combination[0].column];
    let secondSquare=gameBoard[combination[1].row][combination[1].column];
    let thirdSquare=gameBoard[combination[2].row][combination[2].column];

    if(firstSquare && firstSquare===secondSquare && firstSquare===thirdSquare){
      winner=player[firstSquare];
    }
  }
  return winner;
}

function App() {

  // const[activePlayer, setActivePlayer]= useState('X');
  const [player, setPlayer]= useState(PLAYERS)
  const[gameTurns, setGameTurns] =useState([]);
  const activePlayer=deriveActivePlayer(gameTurns);

  const gameBoard= deriveGameBoard(gameTurns);
  const winner= deriveWinners(gameBoard, player);
  const hasDraw= gameTurns.length===9 && !winner;

  function handleActivePlayer(rowIndex, colIndex){
    // setActivePlayer(curr=>curr=='X'?'O':'X');
    
    setGameTurns(prevTurns=>{

      let currentPlayer=deriveActivePlayer(prevTurns);
      const updatedTurns=[
        {square:{row:rowIndex, col:colIndex}, player:currentPlayer}, ...prevTurns
      ];

      return updatedTurns;
    })

  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName){
    setPlayer(prev=>{
      return {
        ...prev,
        [symbol]:newName
    };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
           <Player 
           initialName={PLAYERS.X} symbol='X' isActive={activePlayer==='X'} 
           onPlayerChange={handlePlayerName} />
           <Player
            initialName={PLAYERS.O} symbol='O' isActive={activePlayer==='O'}
             onPlayerChange={handlePlayerName}/>
        </ol>

        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard onSelect={handleActivePlayer} board={gameBoard} />
       </div>
       <Log turns={gameTurns} />
      </main>
  )
}

export default App
