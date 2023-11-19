import GameBord from "./Components/GameBord"
import Log from "./Components/Log";
import Player from "./Components/Player"
import { useState } from "react"
function App() {
  const [playerActive, setPlayerActive] = useState('X');
  const [clickInfo, setClickInfo] = useState([])
  const handleChangePlayer = (row, col) => {
    setPlayerActive(x => x === 'X' ? 'O' : 'X')
    setClickInfo(prev => {
      let player = 'X'
      if (clickInfo.length > 0 && clickInfo[0].player === 'X') {
        player = 'O';
      }
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
