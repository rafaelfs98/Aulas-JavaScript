import './App.css';
import Contador from './componentes/Contador';
import Header from './componentes/Header';
import {ContadorProvider} from './ContadorContexto'

function App() {
  return (
    <div className="App">
      <ContadorProvider>
      <Header></Header>
      <Contador></Contador>
      </ContadorProvider>
    </div>
  );
}

export default App;
