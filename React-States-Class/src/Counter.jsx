import { useState } from "react";

function init() {
  console.log("initialized...");
  return 0;
}

export default function Counter() {
  let [count, setCount] = useState(init); //init reference should be given (not execute it)
  console.log("component is rendered!"); //re-rendering using states start from here
  console.log(`count after rendering = ${count}`);

  function incCount() {
    // setCount(count + 1);
    setCount((currCount) => {
      return currCount + 1;
    });
    console.log(`count inside incCount = ${count}`);
  }

  return (
    <>
      <button onClick={incCount}>Count = {count}</button>
    </>
  );
}
