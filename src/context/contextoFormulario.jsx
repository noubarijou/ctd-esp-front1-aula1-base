// Aqui devemos criar nosso contexto e nosso provider.
import { createContext, useReducer } from "react";

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

const ContextoFormularioProvider = ({ children }) => {

    const [form, dispatch] = useReducer(reducer, initialState);

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
