import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import FormularioContextoProvider from './context/contextoFormulario';
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
      <FormularioContextoProvider>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/formularioEntrada" element={<Formulario />} />
      </Routes>
      </FormularioContextoProvider>
    </div>
      </QueryClientProvider>
  );
}

export default App;
