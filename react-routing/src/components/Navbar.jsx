import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink className={(e) => (e.isActive ? "red" : "")} to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "")} to="/about">
        <li>About</li>
      </NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "")} to="/contact">
        <li>Contact</li>
      </NavLink>
      <button
        onClick={() => {
          navigate("/user/ali");
        }}
      >
        click to navigate!
      </button>
    </nav>
  );
};

export default Navbar;
