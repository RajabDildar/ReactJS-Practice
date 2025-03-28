import Counter from "./Counter.jsx";
import "./App.css";
import LikeButton from "./LikeButton.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import TodoList2 from "./TodoList2.jsx";
import Lottery from "./Lottery.jsx";
import { sum } from "./helper.js";
import Form from "./Form.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import Counter2 from "./Counter2.jsx";
import Joker from "./Joker.jsx";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      {/* <LudoBoard /> */}
      {/* <Counter /> */}
      {/* <LikeButton /> */}
      {/* <TodoList /> */}
      {/* <TodoList2 /> */}
      {/* <Lottery lotteryNumber={3} winCondition={winCondition} /> */}
      {/* <Form /> */}
      {/* <FeedbackForm /> */}
      {/* <Counter2 /> */}
      <Joker />
    </>
  );
}

export default App;
