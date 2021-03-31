import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import OverviewOption from '../PokemonDetailMenu/OverviewOption';
import OptionsContainer from '../PokemonDetailMenu/OptionsContainer';
import EvolutionOption from '../PokemonDetailMenu/EvolutionOptionMenu';
import EvolutionOptionContent from '../PokemonDetailMainScreen/EvolutionOptionContent'
import OverviewOptionContent from '../PokemonDetailMainScreen/OverviewOptionContent';
import PokemonDetailStats from '../PokemonDetail/PokemonDetailStats';
import PokedexBase from '../PokedexBase';

/* 
This component is responsible for the Pokemon Detail page, it calls the Pokedex Base and the Pokemon detail related components
Props: toggleTheme - It is the theme toggle function to switch between the two themes
Route: http://localhost:3000/pokemonId
*/
function PokemonDetail(props) {

    const activeScreens = {
        mainScreen: null,
        statScreen: null
    }
    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);
    const[screens, setScreens] = useState(activeScreens)
    
    
    
    /* const[mainScreen, setMainScreen] = useState();
    const[statScreen, setStatScreen] = useState(); */
    
    
    
    const style = useStyle();
    
  
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res.data) 
            setPokemon(res.data)
            setLoading(false)
        })
    }, [])
    
    const handleOverviewOptionClick = () => {
        
        setScreens(overviewOptionScreens)
    }
    
    const handleEvolutionOptionClick = () => {
        setScreens(evolutionOptionScreens)

    }
    
    const overviewOption = <OverviewOption handleClick={handleOverviewOptionClick}/>
    const evolutionOption = <EvolutionOption handleClick={handleEvolutionOptionClick}/>
    
    const overviewOptionContent =  <OverviewOptionContent pokemon={pokemon} loading={loading}/>
    const evolutionOptionContent = <EvolutionOptionContent pokemonId={pokemon.id}/>
    
    const overviewOptionStatScreen = <PokemonDetailStats pokemon={pokemon} loading={loading}/>
    const optionMenu =  <OptionsContainer firstOption={overviewOption} secondOption={evolutionOption}/>

    const overviewOptionScreens = {mainScreen: overviewOptionContent, statScreen: overviewOptionStatScreen}
    const evolutionOptionScreens = {mainScreen: evolutionOptionContent, statScreen: null}
    
    return (
        
        !loading ?
        <div  style={style.poContainerStyle}>  
        <PokedexBase toggleTheme={props.toggleTheme} mainScreen={screens.mainScreen} 
        optionMenu={optionMenu} statScreen={screens.statScreen}/>
        </div>
        : <div><h2>Loading..</h2></div>
        )
    }
    
    const useStyle = makeStyles({

        pokemonContainer: {
            justifyContent: 'center'
        },

    })

export default PokemonDetail
