import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import pokedexLayout from '../../resources/pokedex-layout2.png';
import axios from 'axios';
import PokeCard from '../Cards/PokeCard';

function PokedexList() {

    const[pokemons, setPokemons] = useState();
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemons(res.data.results)
                setLoading(false)
            })
    }, [])
        
        
 

    const useStyle = makeStyles({
        pokedex:{
            position: 'relative',
            width: '800px',
            height: '800px',
            margin: '30px',
            backgroundImage: `url(${pokedexLayout})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        },

        pokemonContainer: {
            width: '330px',
            height: '380px',
            zIndex: '50',
            marginLeft: '434px',
            position: 'absolute',
            marginTop: '126px',
            verticalAlign: 'middle',
            border: '2px solid black',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
           alignContent: 'space-around',
           overflow: 'hidden'
        }
    })

    const style = useStyle();
    let pattern = "/[0-9]+/$"
    let getPokemonId = (url) =>  url.match(pattern)

    return (
        <div className={style.pokedex}>
            <div className={style.pokemonContainer}>
                 {loading === false ?
                    pokemons.map(pokemon => <PokeCard  key={getPokemonId(pokemon.url)} url={pokemon.url} />)
                    : <h2>Loading..</h2>
                }    
            </div>
            
        </div>
    )
}

export default PokedexList
