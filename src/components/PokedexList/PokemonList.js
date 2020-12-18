import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PokeCard from '../Cards/PokeCard';

function PokemonList(props) {

    const useStyle = makeStyles({
        pokemonContainer: {
            height: '380px',
            width: '330px',
            marginTop: '-10px',
            verticalAlign: 'middle',
           
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
           alignContent: 'space-around',
           overflow: 'hidden'
        }
    });

    const style = useStyle();
    let pattern = "/[0-9]+/$";
    let getPokemonId = (url) =>  url.match(pattern);

    return (
        <div className={style.pokemonContainer}>
             {props.loading === false ?
                    props.pokemons.map(pokemon => <PokeCard  key={getPokemonId(pokemon.url)} url={pokemon.url} />)
                    : <h2>Loading..</h2>
                }    
        </div>
    )
}

export default PokemonList
