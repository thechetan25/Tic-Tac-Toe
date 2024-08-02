import { useState} from 'react';


export default function Gameboard({gboard , onselect}) {  
  return (
    <ol id="game-board">
      {gboard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((col, colindex) => (
              <li key={colindex}>
                <button onClick={() => onselect(rowindex,colindex)} disabled={col !== null}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
