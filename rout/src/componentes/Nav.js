import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="nav">
      <h1>
        <Link to="/">ProgBR</Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/aulas" refreh>
            Aulas
          </Link>
        </li>
        <li>
          <Link to="/sobre" refreh>
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
