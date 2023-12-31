import GameBord from "./Components/GameBord"
import Log from "./Components/Log";
import Gameover from "./Components/Gameover";
import Player from "./Components/Player"
import { useState } from "react"
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS'

const grille = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const DeriveActivePlayer = (tab) => {
  let player = 'X'
  if (tab.length > 0 && tab[0].player === 'X') {
    player = 'O';
  }
  return player;
}
function App() {
  const [clickInfo, setClickInfo] = useState([]);
  const [player, setPlayer] = useState({ 'X': 'player 1', 'O': 'player 2' });
  const gr = [...grille.map(x => [...x])];
  let winner;
  for (const info of clickInfo) {
    const { position, player } = info
    const { row, col } = position
    gr[row][col] = player
  };
  for (const winning of WINNING_COMBINATIONS) {
    let first = gr[winning[0].row][winning[0].column]
    let second = gr[winning[1].row][winning[1].column]
    let third = gr[winning[2].row][winning[2].column]
    if (first && first === second && first === third) {
      winner = first;
    }
  }
  let isDraw = clickInfo.length === 9 && !winner;
  const playerActive = DeriveActivePlayer(clickInfo);
  const handleChangePlayer = (row, col) => {
    setClickInfo(prev => {
      let player = DeriveActivePlayer(prev);
      let info = [{
        position: { row: row, col: col },
        player: player
      }, ...prev];
      return info;
    })
  }
  const HandleReset = () => {
    setClickInfo(() => { return [] });
  }
  const HandleChangeName = (ply, value) => {
    setPlayer(player => ({ ...player, [ply]: [value] }));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player HandleChangeName={HandleChangeName} name="Player 1" symbol="X" isActive={playerActive === 'X'} />
          <Player HandleChangeName={HandleChangeName} name="Player 2" symbol="O" isActive={playerActive === 'O'} />
        </ol>
        {(winner || isDraw) && <Gameover winner={player[winner]} HandleReset={HandleReset} />}
        <GameBord handleChangePlayer={handleChangePlayer} gr={gr} />
      </div>
      <Log clickInfo={clickInfo} />
    </main>
  )
}

export default App
