import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ red: 0, yellow: 0, blue: 0, green: 0 });
  let colors = ["red", "green", "blue", "yellow"];

  function updateBlue() {
    setMoves((currVal) => {
      return { ...currVal, blue: currVal.blue + 1 };
    });
  }

  function updateYellow() {
    setMoves((currVal) => {
      return { ...currVal, yellow: currVal.yellow + 1 };
    });
  }

  function updateRed() {
    setMoves((currVal) => {
      return { ...currVal, red: currVal.red + 1 };
    });
  }

  function updateGreen() {
    setMoves((currVal) => {
      return { ...currVal, green: currVal.green + 1 };
    });
  }

  return (
    <div>
      <p>Ludo Board</p>
      <div className="board">
        <p>Blue Moves = {moves.blue} </p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>red Moves = {moves.red} </p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow} </p>
        <button onClick={updateYellow} style={{ backgroundColor: "Yellow" }}>
          +1
        </button>
        <p>green Moves = {moves.green} </p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>
      </div>
    </div>
  );
}
