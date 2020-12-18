import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import MediaContent from '../PokemonDetailMainScreen/MediaContent';
import ThemeContext from '../ThemeContext';

function OverviewOptionContent(props) {

    const capitalize = (text) => text.charAt(0).toUpperCase()+text.slice(1);
    const isDefault = useContext(ThemeContext);
    const pokemon = props.pokemon;

    const useStyle = makeStyles({

        imageContainer: {

        },

        images: {
            width: '100px',
            height: '100px',
            marginLeft: '40px'

        },

        nameContainer: {
            verticalAlign: 'middle',
            display: 'table',
            fontSize: '18px',
            marginLeft: '15px',
            
        },

        nameContent: {
            height: '55px',
            fontSize: '15px',
            
        },
        
        nameText: {
            verticalAlign: 'middle',
            display: 'table-cell',
        },

        imageTypeName: {
            height: '20px',
            marginLeft: '116px',
            marginBottom: '10px',
            fontSize: '14px',
            marginTop: '35px'
        },
        
        pokemonMediaContent: {
            width: '326px'
        },

        pokemonAttributes: {
            display: 'flex',
            width: '100%',
            marginLeft: '15px',
            marginTop: '25px',
            position: 'absolute'
        },

        pokemonAbilitiesContainer: {
            width: '163px'
        },
        
        pokemonTypesContainer: {
            width: '150px'
        },

        attributeContent: {
            marginLeft: '25px',
            position: 'absolute',
            fontSize: '10px'
        },

        attributeContentBox: {
            marginTop: '15px',
            marginLeft: '40px',
            fontSize: '10px'
            
        },


        attributeName: {
            fontSize: '13px'
        },


       
    });
    const style = useStyle();
    
    return (
        <div>
            <div className={style.nameContent}>
                <div className={style.nameContainer}>
                    <h2>{capitalize(pokemon.name)}</h2>
                </div>
            </div>
            
            <div className={style.pokemonMediaContent}>
                {isDefault === true ? 
                <MediaContent typeNameStyle={style.imageTypeName} containerStyle={style.imageContainer} 
                imageStyle={style.images} frontImgSrc={pokemon.sprites["front_default"]} backImgSrc={pokemon.sprites["back_default"]}/>
                : <MediaContent typeNameStyle={style.imageTypeName} containerStyle={style.imageContainer} 
                imageStyle={style.images} frontImgSrc={pokemon.sprites["front_shiny"]} backImgSrc={pokemon.sprites["back_shiny"]}/>}
            </div>
            <div className={style.pokemonAttributes}>
                <div className={style.pokemonAbilitiesContainer}>
                    <div >
                        <h3 className={style.attributeName}>Abilities:</h3>
                    </div>
                    <div className={style.attributeContentBox}>
                        {pokemon.abilities.map(ability => <h4 classname={style.attributeContent}>{ability.ability.name}</h4>)}
                    </div>
                </div>
                <div classname={style.pokemonTypesContainer}>
                    <div >
                        <h3 className={style.attributeName}>Types:</h3>
                    </div>
                    <div className={style.attributeContentBox}>
                        {pokemon.types.map(type => <h4 classname={style.attributeContent}>{type.type.name}</h4>)}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default OverviewOptionContent
