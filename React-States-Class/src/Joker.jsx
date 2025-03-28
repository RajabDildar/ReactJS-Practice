import { useState, useEffect } from "react";
import "./Joker.css";

export default function Joker() {
  let URL = "https://official-joke-api.appspot.com/random_joke";
  let [newJoke, setNewJoke] = useState({});

  useEffect(() => {
    getNewJoke();
  }, []);

  let getNewJoke = async () => {
    setNewJoke({});
    let res = await fetch(URL);
    let jsonRes = await res.json();
    setNewJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  return (
    <div className="Joker">
      <h2>Best Jokes 😀</h2>
      <br />
      <h3>{newJoke.setup || "loading..."} </h3>
      <br />
      <h3>{newJoke.punchline || "loading..."} </h3>
      <br />
      <button className="newJokeBtn" onClick={getNewJoke}>
        New Joke
      </button>
    </div>
  );
}
