import { Link } from "react-router-dom";
import pokebolaImg from "../../assets/pokebola.png";
import treinadorImg from "../../assets/treinador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input";
import Detalhe from "./detalhe";
import ContextoFormularioProvider from "../../context/contextoFormulario";

const Formulario = () => {
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebolaImg} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className="retorna" to="/">
          Inicio
        </Link>
      </header>
      <div className="formulario-entrada">
        <h3>Solicitação de atenção</h3>
        <p>
          Por favor, preencha o formulário para que possamos mostrar seu Pokémon
        </p>
        <div className="corpo-formulario">
         <ContextoFormularioProvider>
          <div className="inputs">
            <div>
              <p className="nome-secao">
                <img src={treinadorImg} alt="treinador" />
                <span>Treinador</span>
              </p>
              <Input name="nome" label="Nome" />
              <Input name="sobrenome" label="Sobrenome" />
              <Input name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nome-secao">
                <img src={pikachu} alt="pikachu" />
                <span>Pokémon</span>
              </p>
              <Input name="nomePokemon" label="Nome" isPokemon={true} />
              <Input name="tipoPokemon" placeholder="Tipo" label="Tipo" isPokemon={true} />
              <Input name="elementoPokemon" placeholder="Elemento" label="Elemento" isPokemon={true} />
              <Input name="alturaPokemon" placeholder="Altura" label="Altura" isPokemon={true} />
              <Input name="idadePokemon" placeholder="Idade" label="Idade" isPokemon={true} />
            </div>
          </div>
          <Detalhe />
         </ContextoFormularioProvider>
        </div>
      </div>
    </>
  );
};

export default Formulario;
