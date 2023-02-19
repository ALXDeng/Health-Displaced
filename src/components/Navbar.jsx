import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Contacts</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/healthmatch">Healthmatch</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;