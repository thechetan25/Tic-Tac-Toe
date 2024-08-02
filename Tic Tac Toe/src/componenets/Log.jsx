export default function Log({turns}){

    return(
        <>
        <ol id="log">
          {turns.map((turn) => <li key={`${turn.square.col}${turn.square.row}`}>{turn.playsym} has selected {turn.square.row},{turn.square.col}</li>)} 
        </ol>
        </>
    )
}