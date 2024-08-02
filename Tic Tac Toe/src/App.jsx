import Player from "./componenets/Player";
import Gameboard from "./componenets/Gameboard";
import { useState } from "react";
import Log from "./componenets/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Gameover from "./componenets/Gameover";

const gameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveCurrentplayer(gameturns){
  let current = "X";

  if (gameturns.length > 0 && gameturns[0].playsym === "X") {
    current = "O";
  }

  return current;
}

function App() {
  const [turns, setturns] = useState([]);
  const psymbol =deriveCurrentplayer(turns);
  const [names,setname] = useState({
    'X':'Player 1',
    'O':'Player 2'
  })

  let board = [...gameboard.map((arr) => [...arr])];

  for(const turn of turns){
    const {square , playsym} = turn;
    const {row , col} = square;

    board[row][col] = playsym;
  }

  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const first =board[combination[0].row][combination[0].column];
    const second =board[combination[1].row][combination[1].column];
    const third =board[combination[2].row][combination[2].column];

    if(first && first == second && first == third){
      winner =names[first];
    }
  }

  let draw = null;

  if(turns.length == 9 && !winner){
    draw = true
  }


  function handleselect(rowIndex, colIndex) {    
    setturns((prevturn) => {
      const current =deriveCurrentplayer(prevturn);

      const pturn = [
        {
          square: { row: rowIndex, col: colIndex },
          playsym: current,
        },
        ...prevturn,
      ];

      return pturn;
    });
  }

  function restart(){
    setturns([]);
  }

  function handlesave(symbol,plname){
    setname((prevname) => {
      return{
        ...prevname,
        [symbol]:plname
      }
    })
  }

  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            in_name="player-1"
            symbol="X"
            isactive={psymbol === "X"}
            onsave ={handlesave}
          ></Player>
          <Player
            in_name="player-2"
            symbol="O"
            isactive={psymbol === "O"}
            onsave ={handlesave}
          ></Player>
        </ol>
        {(winner || draw) && <Gameover winner={winner} onselect={restart}/>}
        <Gameboard onselect={handleselect} gboard={board} />
      </div>
      <Log turns={turns}/>
    </main>
  );
}

export default App;
