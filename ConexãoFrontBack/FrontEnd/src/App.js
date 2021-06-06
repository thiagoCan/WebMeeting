import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Usuarios from './pages/usuario/usuarios';

function App() {

  return (
    <Router> 
      <div>
        <Route  path="/inicio" > <Usuarios/> </Route>
      </div>
    </Router>
  );
}

export default App;
