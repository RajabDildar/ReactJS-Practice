import AllTitles from "./allTitles.jsx";
import "./App.css";
import Description from "./Description.jsx";
import ProductList from "./ProductList.jsx";
import Hello from "./hello.jsx";

function App() {
  return (
    <div>
      <Hello userName={"Rajab"} textColor={"red"} />
      <Hello userName={"Ali"} textColor={"green"} />
      <Hello userName={"Ahmed"} textColor={"blue"} />
    </div>
  );
}

/* function App() {
  return (
    <>
      <ProductList />
    </>
  );
} */

/* function App() {
  return (
    <>
      <AllTitles />
      <Description />
      <button>Click me!</button>
    </>
  );
} */

export default App;
