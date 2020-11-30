import {BrowserRouter as  Link, useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './NavBar';
import PokeCard from './Cards/PokeCard';



function PokemonList() {

    const[pokemons, setPokemons] = useState([]);

    


    useEffect(()=>{axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => 
            {
            
            setPokemons(res.data.results)
            
            } )
}, [])

    let pattern = "/[0-9]+/$"
    let getPokemonId = (url) =>  url.match(pattern)

    return (
        <div style={containerStyle}>
            {
                pokemons.map(pokemon => <PokeCard  key={getPokemonId(pokemon.url)} url={pokemon.url} />)
            }
            
        </div>
        
    )
}

export default PokemonList


const linkStyle = {
    textDecoration: 'none',
    color: 'red'
}

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

const cardStyle = {
    border: '2px solid black',
    borderRadius: '50px',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    width: '30%',
    height: '20%',
    marginBottom: '20px',
    marginTop: '20px',
    fontSize: '9px'
    
}

