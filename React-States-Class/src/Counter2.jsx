import { useState, useEffect } from "react";

export default function Counter2() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  /* //   when we want to do something on rendering and rerendering (change in any state variable)
  useEffect(() => {
    console.log("this is a side-effect that will happen on every rendering and rerendering");
  }); */

  //   when we want to do something on change in specific state variable, (we pass that variable as dependency)
  useEffect(() => {
    console.log("this is a side-effect that only occur on change in countx");
  }, [countx]);

  /*   //   when we want to do something on rendering only. (not do on rerendering)
  useEffect(() => {
    console.log("this is a side-effect that only occur on first time rendering");
  }, []); */

  let incCountx = () => {
    setCountx((currVal) => currVal + 1);
  };

  let incCounty = () => {
    setCounty((currVal) => currVal + 1);
  };

  return (
    <>
      <button onClick={incCountx}>Count = {countx}</button>
      <br />
      <br />
      <button onClick={incCounty}>Count = {county}</button>
    </>
  );
}
