import { useState } from "react";
import "./Ticket.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ lotteryNumber = 3, winCondition = 15 }) {
  let [ticket, setTicket] = useState(genTicket(lotteryNumber));
  let isWinning = winCondition(ticket);

  let regenerate = (e) => {
    setTicket(genTicket(lotteryNumber));
  };

  return (
    <div className="Lottery">
      <h1>Lottery Game!</h1>
      <br />
      <h4>Ticket</h4>
      <Ticket ticket={ticket} />
      {isWinning ? (
        <h3>Congratulations! you won the lottery.</h3>
      ) : (
        <h3> you lost! Try again.</h3>
      )}
      <button onClick={regenerate}>Buy New Ticket</button>
    </div>
  );
}
