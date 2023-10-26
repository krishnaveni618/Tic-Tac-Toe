import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Players
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectedSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
