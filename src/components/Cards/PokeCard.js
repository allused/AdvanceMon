import React, {useState, useEffect, useContext} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import CardContent from './CardContent'; 
import ThemeContext from '../ThemeContext';

function PokeCard(props) {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let pokeUrl = props.url;
    


    const capitalize = (text) => text.charAt(0).toUpperCase()+text.slice(1);

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
            width: '55px',
            height: '55px',
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
            <h2>Loading..</h2>
        </div>
    )
}

export default PokeCard
