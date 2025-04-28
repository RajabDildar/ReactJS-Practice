import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/User.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar /> <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar /> <Contact />
        </>
      ),
    },
    {
      path: "/user/:userName",
      element: (
        <>
          <User />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
