import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../ThemeContext';
import { makeStyles } from '@material-ui/styles';
import pokedexLayout from '../../resources/pokedex-layout2.png';
import OptionMenu from '../PokemonDetailMenu/OverviewOption';
import PokemonDetailMainScreen from '../PokemonDetailMainScreen/OverviewOptionContent';
import PokemonDetailStats from '../PokemonDetail/PokemonDetailStats';
import PokedexBase from '../PokedexBase';


function PokemonDetail(props) {

    let {id} = useParams();
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true);
    

    const themes = useContext(ThemeContext);

    

    const useStyle = makeStyles({
        pokedex:{
            position: 'relative',
            width: '800px',
            height: '800px',
            margin: '30px',
            backgroundImage: `url(${pokedexLayout})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        },

        pokemonContainer: {
            
            justifyContent: 'center'
        },

        toggleThemeDiv: {

            width: '45px',
            height: '45px',
            position: 'absolute',
            marginLeft: '42px',
            marginTop: '24px',
            borderRadius: '80px'

        }

    })

    

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            console.log(res.data) 
            setPokemon(res.data)
            setLoading(false)})
    }, [])
    
    const style = useStyle();
    const mainScreen =  <PokemonDetailMainScreen pokemon={pokemon}/>
    const optionMenu =  <OptionMenu/>
    return (
        
        !loading ?
        <div  style={style.poContainerStyle}>
            
            <PokedexBase toggleTheme={props.toggleTheme} mainScreen={mainScreen} optionMenu={optionMenu}/>
            {/*<div className={style.pokedex} >
                <div className={style.toggleThemeDiv} onClick={props.toggleTheme}></div>
                <OptionMenu className={style.optionMenu}/>
                <ContentDisplay pokemon={pokemon}/>
                <PokemonDetailStats pokemon={pokemon}/>

            </div>*/}
            
        </div>
        : <div><h2>Loading..</h2></div>
    )
}


export default PokemonDetail
