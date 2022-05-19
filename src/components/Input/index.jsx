import {useContext, useState} from "react";
import { contextoFormulario } from "../../context/contextoFormulario";


const Input = ({ name, label, type = "text", isPokemon = false }) => {

  const { form, displayOnBlur} = useContext(contextoFormulario);
  
  const [input, setInput] = useState(form[name] || '');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();
    
     displayOnBlur(isPokemon ? "atualizar_pokemon" : "atualizar_treinador", {
       campo: name,
       valor: input,
     })

  };
  
  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={input}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
