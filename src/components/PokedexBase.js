import React from 'react';
import { makeStyles } from '@material-ui/styles';
import pokedexLayout from '../resources/pokedex-layout2.png';

function PokedexBase(props) {

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

        optionMenu: {
            
            width: '317px',
            height: '176px',
            zIndex: '50',
            position: 'absolute',
            marginTop: '126px',
            marginLeft: '25px',
            verticalAlign: 'middle',
            display: 'table',
            border: '2px solid black'
        },

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

        toggleThemeDiv: {

            width: '45px',
            height: '45px',
            position: 'absolute',
            marginLeft: '42px',
            marginTop: '24px',
            borderRadius: '80px'

        }
    });

    const style = useStyle();


    return (
        <div className={style.pokedex}>
                <div className={style.toggleThemeDiv} onClick={props.toggleTheme}></div>
                <div className={style.optionMenu}>
                    {props.optionMenu}
                </div>
                <div className={style.mainScreen}>
                    {props.mainScreen}
                </div>
            
        </div>
    )
}

export default PokedexBase
