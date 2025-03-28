function handleClick(event) {
  event.preventDefault();
  console.log("newTask");
}

export default function TodoButton() {
  return <button onClick={handleClick}>Add</button>;
}
