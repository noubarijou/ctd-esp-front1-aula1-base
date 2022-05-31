export const lerTipoPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/');
        const json = await response.json();
        return json;
    }catch (err) {
        console.log(err);
    }
}