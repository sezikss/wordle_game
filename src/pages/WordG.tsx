import React from "react";
import { Tile } from "../components";
import { useWordle } from "../hooks/useWordle";
import "./WordG.css";

const WordG = () => {
  const {
    word,
    isLoading,
    guesses,
    gameOver,
    currentGuesses,
    currentIndex,
    getTileClass,
    initializeGame,
  } = useWordle();
  // console.log(word);

  return (
    <div className="word-container">
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          {Array.from({ length: 6 }, (_, row) => (
            <div key={row} className="row">
              {Array.from({ length: 5 }, (_, col) => {
                const index = row * 5 + col;
                const inputValue = guesses[row][col] || "";
                const tileClass =
                  currentIndex > row ?  `${getTileClass (inputValue, col, row)} ` : "";
                return (
                  <Tile 
                    key={index}
                    index={index}
                    inputValue={inputValue}
                    tileClass={tileClass}
                  />
                );
              })}
            </div>
          ))}
          {gameOver && (
            <button onClick={initializeGame}>Начать заново</button>
          )}
        </div>
      )}
    </div>
  );
};

export default WordG;