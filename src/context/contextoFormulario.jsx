// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from "react";

/**
 * Aqui criamos o contexto e o estado inicial
 */

export const contextoFormulario = createContext();
const initialState = {
    treinador: {
      nome: "",
      apelido: "",
      email: "",
    },
    pokemon: {
      nomePokemon: "",
      tipoPokemon: "",
      elementoPokemon: "",
      alturaPokemon: "",
      idadePokemon: "",
    },
  };

/**
 * A função reducer é responsável por atualizar o estado do contexto.
 * @param {*} state 
 * @param {*} action 
 * @returns {Object}
 */

const reducer = (state, action) => {
  switch (action.type) {
      case "atualizar_treinador":
          return {
                ...state,
                treinador: {
                    ...state.treinador,
                    ...action.payload,
          },
  };
    case "atualizar_pokemon":
        return {
            ...state,
            pokemon: {
                ...state.pokemon,
                ...action.payload,
        },
    };
    default:
        return state;
    }
};

/**
  * Declaramos o provider do contexto do formulário
 */

const ContextoFormularioProvider = ({ children }) => {

    const [form, dispatch] = useReducer(reducer, initialState);
  /**
   * A função recebe o action type e a informação do input e atualiza o estado do contexto pelo dispatch
   * @param {*} type 
   * @param {*} inputInfo 
   */
    const displayOnBlur = (type, inputInfo) => {
        const {campo, valor} = inputInfo;

        dispatch({
            type,
            payload: {
                [campo]: valor,
            },
        });
    };

  return (
    <contextoFormulario.Provider value={{ form, displayOnBlur }}>
      {children}
    </contextoFormulario.Provider>
  );
};

export default ContextoFormularioProvider;
