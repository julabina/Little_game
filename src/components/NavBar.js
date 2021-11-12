import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink exact to="/Littles_games">
        Home
      </NavLink>
      <NavLink exact to="/Littles_games/about">
        About
      </NavLink>
    </div>
  );
};

export default NavBar;

/* <button>Home</button>
<button>About</button> */
