export default function Gameover({winner , onselect}){
    return(
        <>
        <div id="game-over">
            <h2>Game over!</h2>
            {!winner ? <p>It is a Draw</p> : <p>{winner} is the GOAT</p>}
            <p>
                <button onClick={onselect}>Rematch</button>
            </p>
        </div>
        </>
    )
}