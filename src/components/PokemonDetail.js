import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ThemeContext from './ThemeContext';

function PokemonDetail() {

    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);

    const themes = useContext(ThemeContext);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res.data) 
            setPokemon(res.data)
            setLoading(false)})
    }, [])
    

    return (
        !loading ?
        <div className="po-container" style={poContainerStyle}>
            { 
            <div className="po-card" style={pokemonCardStyle}>
                <img src={ themes ? pokemon.sprites["front_default"] : pokemon.sprites["front_shiny"]} alt="not found" width="150px" height="140px"></img>
                <div><h1>Name: {pokemon.name}</h1></div>
                <div><h2>Weight: {pokemon.weight} kg</h2>
                     <h2>Height: {pokemon.height}</h2></div>
                <div></div>
            </div>}
        </div>
        : <div><h2>Loading..</h2></div>
    )
}

const pokemonCardStyle = {
    border: '2px solid black',
    borderRadius: '3px',
    display: 'inherit',
    justifyContent: 'center',
    width: '30%',
    fontFamily: 'Roboto',
    margin: '30px'
}

const poContainerStyle = {
    margin: 'auto',
    justifyContent: 'center'
}

export default PokemonDetail
