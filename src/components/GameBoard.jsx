import { useState } from "react";

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowindex, colIndex) {
    setGameBoard((previous) => {
      const updatedArray = [
        ...previous.map((initialArray) => [...initialArray])
      ];
      updatedArray[rowindex][colIndex] = activePlayerSymbol;
      return updatedArray;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowindex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
