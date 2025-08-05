import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Flights</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
