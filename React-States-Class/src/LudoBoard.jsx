import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ red: 0, yellow: 0, blue: 0, green: 0 });
  let colors = ["red", "green", "blue", "yellow"];

  function handleMove(color) {
    setMoves((currVal) => {
      return { ...currVal, [color]: currVal[color] + 1 };
    });
  }

  return (
    <>
      {colors.map((color) => {
        return (
          <div key={color}>
            <p>
              {color.charAt(0).toUpperCase() + color.slice(1)} moves ={" "}
              {moves[color]}
            </p>
            <button
              onClick={handleMove.bind(null, color)}
              style={{ backgroundColor: color }}
            >
              +1
            </button>
          </div>
        );
      })}
    </>
  );
}
