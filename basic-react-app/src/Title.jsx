import "./Title.css";

function Title() {
  let name = "rajab";
  return (
    <div className="Title">
      <h1>I am the title</h1>
      <h2 className="greetings">Hi {name.toUpperCase()}</h2>
    </div>
  );
}

export default Title;
