import "./App.css";
import Header from "./Header";

function App() {
  return (
    <Header
      name="Dev+"
      links={["Sobre", "Comprar", "Contato", "Login"]}
    ></Header>
  );
}

export default App;
