
const grille = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBord = ({ handleChangePlayer }) => {

    return (
        <ol id="game-board">
            {
                gr.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => { handleClick(rowIndex, colIndex) }}>{col}</button>
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