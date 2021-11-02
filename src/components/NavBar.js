import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="about">
        About
      </NavLink>
    </div>
  );
};

export default NavBar;

/* <button>Home</button>
<button>About</button> */
