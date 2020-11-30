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
    
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    useEffect(() => {
        axios.get(`${pokeUrl}`)
            .then(res => {
            setPokemon(res.data)
            setLoading(false)
            })
    }, [])

    const style = makeStyles({
        
        cardContainer: {
            width: '200px',
            alignContent: 'center',
            border: '2px solid black',
            padding: '10px',
            margin: '20px',
            alignItems: 'center',
            borderRadius: '100px'

        },

        lightTheme: {
            

        },

        darkTheme: {
            backgroundColor: '#6d6d6d'
        },

        cardMedia: {
            height: '80px',
            width: '50%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            //alignItems: 'center'

        },

        cardTitle: {
            color: 'red',
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif'

        },

        cardContent: {
            height: '60px',
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif'

        }
    })

    const classes = style();

    const themes = useContext(ThemeContext)

    return (
        !loading ?
        <div className={`${classes.cardContainer} ${themes? classes.lightTheme : classes.darkTheme}`}>
                
                <Link to={`/pokemon/${pokemon.id}`}><div className={classes.cardMedia}><img src={themes ? pokemon.sprites["front_default"] : pokemon.sprites["front_shiny"]} alt="Not found"></img></div></Link>
                <div className={classes.cardTitle}><h2>{pokemon.name.capitalize()}</h2></div>
                <div className={classes.cardContent}> <CardContent types={pokemon.types}/></div>
        </div>
        : <div>
            <h2>Loading..</h2>
        </div>
    )
}

export default PokeCard
