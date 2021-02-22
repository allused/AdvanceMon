import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import OverviewOption from '../PokemonDetailMenu/OverviewOption';
import PokemonDetailMainScreen from '../PokemonDetailMainScreen/OverviewOptionContent';
import PokemonDetailStats from '../PokemonDetail/PokemonDetailStats';
import PokedexBase from '../PokedexBase';
import OptionsContainer from '../PokemonDetailMenu/OptionsContainer'

/* 
This component is responsible for the Pokemon Detail page, it calls the Pokedex Base and the Pokemon detail related components
Props: toggleTheme - It is the theme toggle function to switch between the two themes
Route: http://localhost:3000/pokemonId
*/
function PokemonDetail(props) {

    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);
    const overviewOption = <OverviewOption />
    const mainScreen =  <PokemonDetailMainScreen pokemon={pokemon}/>
    const optionMenu =  <OptionsContainer firstOption={overviewOption}/>
    const statScreen = <PokemonDetailStats pokemon={pokemon}/>

    const useStyle = makeStyles({

        pokemonContainer: {
            justifyContent: 'center'
        },

    })

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res.data) 
            setPokemon(res.data)
            setLoading(false)})
    }, [])
    
    const style = useStyle();
    

    return (
        
        !loading ?
        <div  style={style.poContainerStyle}>  
            <PokedexBase toggleTheme={props.toggleTheme} mainScreen={mainScreen} 
            optionMenu={optionMenu} statScreen={statScreen}/>
        </div>
        : <div><h2>Loading..</h2></div>
    )
}


export default PokemonDetail
