import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import OveriewContent from './OverviewOptionContent';

function ContentDisplay(props) {


    const useStyle = makeStyles({
        mainScreen: {
           
            width: '326px',
            height: '373px',
            zIndex: '50',
            marginLeft: '434px',
            position: 'absolute',
            marginTop: '126px',
            verticalAlign: 'middle',
            display: 'table'
        },
    }
    );
    
    const style = useStyle();

    return (
        <div >
            <OveriewContent pokemon={props.pokemon}/>
        </div>
    )
}

export default ContentDisplay
