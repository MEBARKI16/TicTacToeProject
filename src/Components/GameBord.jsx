const GameBord = ({ handleChangePlayer, gr }) => {
    return (
        <ol id="game-board">
            {
                gr.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button disabled={col !== null} onClick={() => { handleChangePlayer(rowIndex, colIndex) }}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}
export default GameBord;