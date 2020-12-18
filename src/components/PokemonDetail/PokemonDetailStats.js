import React from 'react';
import { makeStyles } from '@material-ui/styles';


function PokemonDetailStats(props) {

    const pokemon = props.pokemon;

    const useStlye = makeStyles({
        statContainer: {
            display: 'flex',
        },

        attribute: {
            marginLeft: '20px',
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
                <h3>Hp: </h3>
                <div className={style.values}>
                {pokemon.stats.map(hp => {
                    if (hp.stat.name === "hp") return hp.base_stat;
                })}</div>
            </div>
            <div className={style.attribute}>
                <h3>Def: </h3>
                <div className={style.values}>
                {pokemon.stats.map(def => {
                    if (def.stat.name === "defense") return def.base_stat;
                })}</div>
            </div>
            <div className={style.attribute}>
                <h3>Str: </h3>
                <div className={style.values}>{pokemon.stats.map(str => {
                    if (str.stat.name === "attack") return str.base_stat;
                })}</div>
            </div>
        </div>
    )
}

export default PokemonDetailStats
