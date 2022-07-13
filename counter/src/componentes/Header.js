import React, { useContext } from "react";
import { ContadorContexto } from "../ContadorContexto";


function Header(props) {
    const [contagem,setContagem]= useContext(ContadorContexto)
  return(
    <div className="Header">
        <h3>Contador</h3>
        <div>{contagem}</div>
    </div>)
}

export default Header;
