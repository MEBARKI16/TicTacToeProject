import { useState } from "react";
const grille = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const GameBord = ({handleChangePlayer,playerActive}) => {
    const [gr, setGr] = useState(grille);
    const handleClick = (row, col) => {
        setGr(x => {
            const fakeGr = [...x];
            fakeGr[row][col] = playerActive;
            return fakeGr;
        });console.log(playerActive);
        handleChangePlayer();
        
    }
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