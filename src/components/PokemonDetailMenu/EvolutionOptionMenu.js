import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';


function EvolutionOptionMenu() {

    const evolutionStyle = useTheme();
    const useStyle = makeStyles(evolutionStyle)
    const style = useStyle();
    return (
        <div className={`${style.sharedStyle} ${style.secondOptionStyle}`}>
            <h3>Evolution</h3>
        </div>
    )
}

export default EvolutionOptionMenu
