import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Link } from 'react-router-dom';
import pokedexLayout from '../resources/pokedex-layout2.png';

/* 
This component is the Pokedex base layout, every function may be passed as props, so it has no function in itself,
but it let's you display your desired content on any screen / Main Screen, Option screen, Attribute screen /
Props: toggleTheme - It is a function to switch between the two themes in ThemeContext
        optionMenu - You can pass a component which you want to be displayed in the Option Menu Screen
        mainScreen - You can pass a component which you want to be displayed in the Main Screen
        greenBtnAction - You can pass a component to provide a functionality to the green button
        greenBtnTitle  - You can pass a title for the green button
        blueBtnAction - You can pass a component to prodivde functionality to the blue button
        blueBtnTitle - You can pass a title for the blue button
*/

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

        },

        statContainer: {
            fontSize: '12px',
            position: 'absolute',
            marginTop: '463px',
            marginLeft: '18px',
            width: '318px',
            height: '46px',
            display: 'flex',
            
        },

        pokedexListButton: {
            
            marginLeft: '55px',
        },

        blueBtn: {
            marginLeft: '167px',
        },

        greenBtn: {
            marginLeft: '279px',
        },

        buttons: {
            width: '30px',
            height: '30px',
            marginTop: '340px',
            borderRadius: '40px',
            border: '2px solid black',
            position: 'absolute',

        },

        functionalBtnTitles: {
            marginTop: '375px',
            border: '2px solid black',
            position: 'absolute',
            width: '80px',
            height: '30px',
            fontSize: '7px',
            color: '#ffffffdb',
            fontFamily: 'Roboto-Font'
        },

        greenBtnTitle: {
            marginLeft: '279px'
        },

        blueBtnTitle: {
            marginLeft: '167px',
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
                <div className={style.statContainer}>
                    {props.statScreen}
                </div>
                <Link to="/">
                    <div className={`${style.pokedexListButton} ${style.buttons}`} />
                </Link>
                <div className={`${style.greenBtn} ${style.buttons}`} onClick={props.greenBtnAction}></div>
                <div className={`${style.functionalBtnTitles} ${style.greenBtnTitle}`}>
                    <h3>{props.greenBtnTitle}</h3>
                </div>
                <div className={`${style.blueBtn} ${style.buttons}`} onClick={props.blueBtnAction}></div>
                <div className={`${style.functionalBtnTitles} ${style.blueBtnTitle}`}>
                    <h3>{props.blueBtnTitle}</h3>
                </div>
        </div>
    )
}

export default PokedexBase
