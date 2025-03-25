function printHello(evt) {
  console.log("Hello!");
  console.log(evt.target);
}

function printBye() {
  console.log("Bye!");
}

function handleMouseOver() {
  console.log("You hovered!");
}

export default function ButtonList() {
  return (
    <>
      {/* events in react */}
      <button onClick={printHello}>Hello</button>
      <button onClick={printBye}>Bye!</button>
      <button onMouseOver={handleMouseOver}>Hover</button>
    </>
  );
}
