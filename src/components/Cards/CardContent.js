import React from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import {useEffect, useState} from 'react';

function CardContent(props) {

    const types = props.types;

    

    console.log();

    const style = makeStyles({
        
        container: {

            width: '70%'
        },

        type: {
            width: '100%',
            textAlign: 'center',
            fontFamily: 'Montserrat'
        }
    })
    return (
        <div className={style.container}>
                {types.map(type => <h3>{type.type.name}</h3>)}
        </div>
        
    )
}

export default CardContent
