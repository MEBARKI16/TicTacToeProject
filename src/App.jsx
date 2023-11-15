import GameBord from "./Components/GameBord"
import Player from "./Components/Player"
import { useState } from "react"
function App() {
  const [playerActive, setPlayerActive] = useState('X');
  const handleChangePlayer = () => {
    setPlayerActive(x => x === 'X' ?  'O' : 'X')
  }
  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={playerActive === 'X'} />
          <Player name="Player 2" symbol="O" isActive={playerActive === 'O'} />
        </ol>
        <GameBord handleChangePlayer={handleChangePlayer} playerActive={playerActive} />
      </div>
      Log
    </main>
  )
}

export default App
