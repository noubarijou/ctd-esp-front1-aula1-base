import {useContext, useState} from "react";
import { contextoFormulario } from "../../context/contextoFormulario";
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import { lerTipoPokemon } from "../../api/tipoPokemon";

const Select = ({ name, label, type = "text", isPokemon = false }) => {
    
    const {data, error, isLoading} = useQuery('poketipos', lerTipoPokemon);
    // console.log(data.results);
    const { form, displayOnBlur} = useContext(contextoFormulario);
    const [isDisabled, setIsDisabled] = useState(false);
    const [input, setInput] = useState(form[name] || '');
    
    const handleDisable = () => {
        setIsDisabled(!isDisabled);
    }
    
    if (error || isLoading) {
        handleDisable();
    }
    /**
    * Esta função recebe o evento como parametro e atualiza o estado do input ao passo que é modificado
    * @param {event} event - evento do input
    * @returns {void}
    */
  
    const onChange = (e) => {
      setInput(e.target.value);
    };
  
    /**
     *Esta função recebe o evento como parametro e previne o recarregamento da página
     *ela também atualiza o estado do contexto de acordo com o input inserido assim que o foco é retirado do input
      *@param {event} event - evento do input
      *@returns {void} 
     */
  
    const onBlur = (e) => {
      e.preventDefault();
      
       displayOnBlur(isPokemon ? "atualizar_pokemon" : "atualizar_treinador", {
         campo: name,
         valor: input,
       })
       console.log(input);
  
    };


    
    return (
      <div className="input-receptor">
        <label htmlFor={name}>{label}</label>
        <select
          type={type}
          value={input}
          id={name}
          onChange={onChange}
          onBlur={onBlur}
          disabled={isDisabled}
        >
            <option value=''>Escolha o tipo</option>
            {/* {data?.results?.map(poketype => (
                <option key={poketype.id} value={poketype.name}>{poketype.name}</option>
            ))} */}
        </select>
      </div>
    );
  };
  
  Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    isPokemon: PropTypes.bool,
  }

    export default Select;