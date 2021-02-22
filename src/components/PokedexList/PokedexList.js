import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import PokemonList from './/PokemonList';
import PokedexBase from '../PokedexBase';
/* 
This component responsible for the List view page, controlls the functionalty two of the main buttons,
it calls the PokedexBase component whith the Pokemon List View component
Props: toggleTheme - this is the theme toggle function, to switch between the two themes
Route: http://localhost:3000/
*/

function PokedexList(props) {

    const[currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const[pokemons, setPokemons] = useState();
    const[loading, setLoading] = useState(true);
    const[previousUrl, setPreviousUrl] = useState("");
    const[nextUrl, setNextUrl] = useState("");
    
    const nextBtnTitle = nextUrl != null ? "Next" : ""; 
    const previousBtnTitle = previousUrl != null ? "Previous" : ""; 

    const pokemonListScreen = <PokemonList loading={loading} pokemons={pokemons}/>;

    const nextPage = () => {nextUrl !== "" ? setCurrentUrl(nextUrl) : setNextUrl("")};
    const previousPage = () => {previousUrl !== "" ? setCurrentUrl(previousUrl) : setPreviousUrl("")};

    useEffect(() => {
        axios.get(`${currentUrl}`)
            .then(res => {
                setPokemons(res.data.results)
                setLoading(false)
                setNextUrl(res.data.next)
                setPreviousUrl(res.data.previous)
            })
    }, [currentUrl])
        
    return (
        <div>
            <PokedexBase mainScreen={pokemonListScreen} toggleTheme={props.toggleTheme} 
            greenBtnAction={nextPage} blueBtnAction={previousPage} greenBtnTitle={nextBtnTitle} blueBtnTitle={previousBtnTitle}/>
        </div>
    )
}

export default PokedexList
