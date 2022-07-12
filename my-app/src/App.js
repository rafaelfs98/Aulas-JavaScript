import "./App.css";
import Header from "./Header";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const { show, setShow } = useState(true);

  let time = 0;
  let timer = setInterval(() => {
    time++;
    console.log(time);

    if (time > 5) {
      clearInterval(timer);
      setShow(true);
    }
  }, 1000);

  if (show) {
    return (
      <div>
        <Header
          name="Dev+"
          links={["Sobre", "Comprar", "Contato", "Login"]}
        ></Header>
        <Counter count={3}></Counter>
      </div>
    );
  } else {
    return (
      <div>
        <Header
          name="Dev+"
          links={["Sobre", "Comprar", "Contato", "Login"]}
        ></Header>
        Sem contador
      </div>
    );
  }
}

export default App;
