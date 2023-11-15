const grille = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBord = () => {
    return (
        <ol id="game-board">
            {
                grille.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button>{col}</button>
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