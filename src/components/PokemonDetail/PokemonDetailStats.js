import React from 'react';
import { makeStyles } from '@material-ui/styles';


/* 
This component responsible for displaying the pokemon stats in Pokemon Detail Overview Option 
Props: pokemon - The pokemon object to get the actual pokemon attributes
 */
function PokemonDetailStats(props) {

    const pokemon = props.pokemon;

    const useStlye = makeStyles({
        statContainer: {
            display: 'flex',
        },

        attribute: {
            marginLeft: '15px',
            display: 'flex'
        },

        values: {
            marginTop: '13px',
            marginLeft: '10px'
        }
    })

    const style = useStlye();

    return (
        <div className={style.statContainer}>
            <div className={style.attribute}>
                <h4>Hp: </h4>
                <div className={style.values}>
                {pokemon.stats.map(hp => {
                    if (hp.stat.name === "hp") return hp.base_stat;
                })}</div>
            </div>
            <div className={style.attribute}>
                <h4>Def: </h4>
                <div className={style.values}>
                {pokemon.stats.map(def => {
                    if (def.stat.name === "defense") return def.base_stat;
                })}</div>
            </div>
            <div className={style.attribute}>
                <h4>Str: </h4>
                <div className={style.values}>{pokemon.stats.map(str => {
                    if (str.stat.name === "attack") return str.base_stat;
                })}</div>
            </div>
        </div>
    )
}

export default PokemonDetailStats
