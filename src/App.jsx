import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import FormularioContextoProvider from './context/contextoFormulario';

function App() {
  return (
    <div className="App">
      <FormularioContextoProvider>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/formularioEntrada" element={<Formulario />} />
      </Routes>
      </FormularioContextoProvider>
    </div>
  );
}

export default App;
