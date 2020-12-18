import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PokemonList from './/PokemonList';
import PokedexBase from '../PokedexBase';

function PokedexList(props) {

    const[pokemons, setPokemons] = useState();
    const[loading, setLoading] = useState(true);
    const pokemonListScreen = <PokemonList loading={loading} pokemons={pokemons}/>;

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemons(res.data.results)
                setLoading(false)
            })
    }, [])
        
    return (
        <div>
            <PokedexBase mainScreen={pokemonListScreen} toggleTheme={props.toggleTheme}/>
        </div>
    )
}

export default PokedexList
