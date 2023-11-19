
const grille = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBord = ({ handleChangePlayer, clickInfo }) => {
    const gr = grille;
    for (const info of clickInfo) {
        const { position, player } = info
        const { row, col } = position
        grille[row][col] = player
    };
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