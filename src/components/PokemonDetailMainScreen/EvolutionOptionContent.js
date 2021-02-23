import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';

function EvolutionOptionContent(props) {

    const[evolutionChain, setEvolutionChain] = useState();
    const style = useStyle();

    useEffect(() => {
        axios(`https://pokeapi.co/api/v2/evolution-chain/${props.pokemonId}`)
            .then(res => setEvolutionChain(res.data))
    }, [])


    return (
        <div className={style.containerStyle}>
            <h2>{evolutionChain}</h2>
        </div>
    )
}

const useStyle = makeStyles({
    containerStyle: {display: 'table-cell'}
})

export default EvolutionOptionContent