import React from "react";
import "../Todo.css";

import Menu from "./Menu";


function Header(props) {
  return (
    <header className="hed">
      <h1>{props.name}</h1>
      <Menu links={props.links}></Menu>
    </header>
  );
}



export default Header;
