import "./App.css";
import Home from "./componentes/Home";
import Nav from "./componentes/Nav";
import Aulas from "./componentes/Aulas";
import Sobre from "./componentes/Sobre";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router forceRefresh={true}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/sobre" component={Sobre} />

          <Route path="/aulas" component={Aulas} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
