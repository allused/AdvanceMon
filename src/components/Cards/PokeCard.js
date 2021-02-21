import React, {useState, useEffect, useContext} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import ThemeContext from '../ThemeContext';

/*
This component responsible for displaying the pokemons in the Pokemon List view
It shows the default or the shiny pics of the pokemon, depends on the theme context actual value
Props: URL - the actual pokemon url, so it can fetch the picture data from the pokemon API
*/

function PokeCard(props) {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let pokeUrl = props.url;

    useEffect(() => {
        axios.get(`${pokeUrl}`)
            .then(res => {
            setPokemon(res.data)
            setLoading(false)
            })
    }, [])

    const style = makeStyles({

        cardContainer: {
            width: 'inherit',
            height: 'inherit',
            display: 'flex',
            alignContent: 'center'
        },

        card: {
            width: '50px',
            height: '50px',
            margin: '8px',
            marginTop: '-8px',
            boxSizing: 'border-box',
            backgroundRepeat: 'no-repeat',
            
        },


    })

    const classes = style();

    const themes = useContext(ThemeContext)

    return (
        !loading ?
       
            <div className={classes.card}>
                <Link to={`/pokemon/${pokemon.id}`}><img src={themes ? pokemon.sprites["front_default"] : pokemon.sprites["front_shiny"]} alt="Not found"></img></Link>
            </div>
        
        : <div>
            <h5>Loading..</h5>
        </div>
    )
}

export default PokeCard
