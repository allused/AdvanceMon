import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import OptionMenu from '../PokemonDetailMenu/OverviewOption';
import PokemonDetailMainScreen from '../PokemonDetailMainScreen/OverviewOptionContent';
import PokemonDetailStats from '../PokemonDetail/PokemonDetailStats';
import PokedexBase from '../PokedexBase';


function PokemonDetail(props) {

    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);
    const mainScreen =  <PokemonDetailMainScreen pokemon={pokemon}/>
    const optionMenu =  <OptionMenu/>
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
