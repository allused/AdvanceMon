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

    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);
    
    
    
    /* const[mainScreen, setMainScreen] = useState();
    const[statScreen, setStatScreen] = useState(); */
    
    const activeScreens = {
        mainScreen: null,
        statScreen: null
    }
    
    const style = useStyle();
    
    const setMainScreen = (component) => activeScreens.mainScreen = component;
    const setStatScreen = (component) => activeScreens.statScreen = component;
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res.data) 
            setPokemon(res.data)
            setLoading(false)
        })
    }, [])
    
    const handleOverviewOptionClick = () => {
        setMainScreen(overviewOptionContent)
        setStatScreen(overviewOptionStatScreen)
    }
    
    const handleEvolutionOptionClick = () => {
        setMainScreen(evolutionOptionContent)
        setStatScreen(null)
    }
    
    const handleOptionClicks = {
        firstOption: handleOverviewOptionClick,
        secondOption: handleEvolutionOptionClick
    }
    const overviewOption = <OverviewOption handleClick={handleOptionClicks.firstOption}/>
    const evolutionOption = <EvolutionOption handleClick={handleOptionClicks.secondOption}/>
    
    const overviewOptionContent =  <OverviewOptionContent pokemon={pokemon} loading={loading}/>
    const evolutionOptionContent = <EvolutionOptionContent />
    
    const overviewOptionStatScreen = <PokemonDetailStats pokemon={pokemon} loading={loading}/>
    const optionMenu =  <OptionsContainer firstOption={overviewOption} secondOption={evolutionOption}/>
    
    return (
        
        !loading ?
        <div  style={style.poContainerStyle}>  
        <PokedexBase toggleTheme={props.toggleTheme} mainScreen={activeScreens.mainScreen} 
        optionMenu={optionMenu} statScreen={activeScreens.statScreen}/>
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
