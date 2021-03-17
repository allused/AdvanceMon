import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MediaContent from './MediaContent';

function EvolutionOptionContent(props) {
  const[allPokemonData, setAllPokeData] = useState([]);
  const style = useStyle();

useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonId}/`)
      .then((evoChainUrl) => axios(`${evoChainUrl.data.evolution_chain.url}`))
        .then((evoChain) => getEvolutionsData(evoChain.data))
          .then((evoChainList) => {
            let pokemonPromise = 
              evoChainList.map(pokemon => axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_name}`)
                  .then((pokemonData) => ({pokemon: pokemon, 
                                          frontSprite: pokemonData.data.sprites.front_default, 
                                          backSprite: pokemonData.data.sprites.back_default })))

            Promise.all(pokemonPromise)
              .then(allDataSplitted => 
                    allDataSplitted.map(data => ({name: data.pokemon.pokemon_name, minLevel: data.pokemon.min_level, frontSprite: data.frontSprite})))
                  .then(allData => { setAllPokeData(allData)})
          })
}, [props.pokemonId])

  const getEvolutionsData = (evoChainData) => {
    let currentEvolution = evoChainData.chain;
    let evolutionChain = [];

    do {
      let evolutionsCount = currentEvolution.evolves_to.length;
      evolutionChain.push({
        pokemon_name: currentEvolution.species.name,
        min_level: currentEvolution.evolution_details.length == 0  ? 1 : currentEvolution.evolution_details[0].min_level,
      });
      if (evolutionsCount > 1) {
        for (let i = 1; i < evolutionsCount; i++) {
          evolutionChain.push({
            pokemon_name: currentEvolution.evolves_to[i].species.name,
            min_level: !currentEvolution
              ? 1
              : currentEvolution.evolves_to[i].min_level,
          });
        }
      }
      currentEvolution = currentEvolution.evolves_to[0];
    } while (
      currentEvolution != undefined &&
      currentEvolution.hasOwnProperty("evolves_to")
    );

    return evolutionChain;
  };
  return (
    <div className={style.containerStyle}>
      {
        allPokemonData  !== []
        ? allPokemonData.map(pokemon => <MediaContent evo={true} name={pokemon.name} minLevel={pokemon.minLevel} 
          frontImgSrc={pokemon.frontSprite} imageStyle={style.mediaCardImg} 
          containerStyle={style.mediaContainerStyle} typeNameStyle={style.mediaContainerFont} levelStyle={style.meadiaContainerLevel}/>)
        : <h2>Loading..</h2>
      }

    </div>
  );
}

const useStyle = makeStyles({
  containerStyle: { 
    display: "table-cell" 
  },

  mediaCardImg: {
    width: '70px',
    height: '70px',
    paddingLeft: '160px',
    marginTop: '-100px',
    position: 'absolute'
  },

  mediaContainerStyle: {
    paddingLeft: '20px',
    paddingTop: '15px'
    //display: 'flex'
  },

  mediaContainerFont: {
    fontSize: '16px'
  },

  meadiaContainerLevel: {
    marginTop: '35px',
    fontSize: '13px'
  }
});

export default EvolutionOptionContent;
