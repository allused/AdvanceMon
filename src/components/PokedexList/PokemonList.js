import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PokeCard from '../Cards/PokeCard';
/* 
This component responsible for the Pokemon List view, it sets the main screen while the List View and uses the Pokemon Card component to
display the pokemons.
Props: loading - It is used to indicate if the pokemons object is fetched from the pokemon API | 
        pokemons - It contains a pokemon object with the given pokemon URL
*/
function PokemonList(props) {

    const useStyle = makeStyles({
        pokemonContainer: {
            height: '380px',
            width: '344px',
            marginTop: '-10px',
            verticalAlign: 'middle',
            marginLeft: '-10px',
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
             {props.loading === false 
                ? props.pokemons.map(pokemon => <PokeCard  key={getPokemonId(pokemon.url)} url={pokemon.url} />)
                : <h2>Loading..</h2>
                }    
        </div>
    )
}

export default PokemonList
