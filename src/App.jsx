import GameBord from "./Components/GameBord"
import Log from "./Components/Log";
import Player from "./Components/Player"
import { useState } from "react"
const DeriveActivePlayer = (tab) => {
  let player = 'X'
  if (tab.length > 0 && tab[0].player === 'X') {
    player = 'O';
  }
  return player;
}
function App() {
  const [clickInfo, setClickInfo] = useState([]);
  const playerActive = DeriveActivePlayer(clickInfo);
  const handleChangePlayer = (row, col) => {
    setClickInfo(prev => {
      let player = DeriveActivePlayer(prev);
      let info = [{
        position: { row: row, col: col },
        player: player
      }, ...prev];
      console.log(info)
      return info;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={playerActive === 'X'} />
          <Player name="Player 2" symbol="O" isActive={playerActive === 'O'} />
        </ol>
        <GameBord handleChangePlayer={handleChangePlayer} clickInfo={clickInfo} />
      </div>
      <Log clickInfo={clickInfo} />
    </main>
  )
}

export default App
