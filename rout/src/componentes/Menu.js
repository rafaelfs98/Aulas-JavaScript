import React from "react";
import {Link} from "react-router-dom"

function Menu(props) {
  const listLinks = props.links.map((link, index) => (
    <li key={index}><Link to={props.Link}>{link}</Link></li>
  ));

  return <ul className="menu">{listLinks}</ul>;
}

export default Menu;
