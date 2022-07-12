import "./App.css";
import Header from "./Header";
import Counter from './Counter'

function App() {
  return (
    <div>
     <Header
      
      name="Dev+"
      links={["Sobre", "Comprar", "Contato", "Login"]}
    ></Header>
    <Counter></Counter>


    </div>
   
  );
}

export default App;
