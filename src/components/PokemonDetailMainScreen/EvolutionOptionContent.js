import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MediaContent from './MediaContent';

function EvolutionOptionContent(props) {
  const[allEvoData, setEvolutionData] = useState([]);
  const[loading, setLoading] = useState(true);
  const[fetchEvoData, setFetchData] = useState(true);
  const style = useStyle();

useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonId}/`)
    .then((res) => {
        axios(
            `${res.data.evolution_chain.url}`
          ).then((res) => {
              getEvolutionsData(res.data);
              setFetchData(false);
          });
    })
}, props.pokemonId)

useEffect(() => {
  if (fetchEvoData !== []){
    console.log(allEvoData)
    allEvoData.map(pokemon => {
      axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_name}`)
      .then((res) => Object.assign(pokemon, {front_def: res.data.sprites.front_default,
        back_def: res.data.sprites.back_default}))
    })
    console.log(allEvoData)
    setLoading(false);
  }
}, fetchEvoData)

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

    setEvolutionData(evolutionChain);
    
  };
  console.log(allEvoData);
  return (
    <div className={style.containerStyle}>
      {
        !loading 
        ? allEvoData.map(pokemon => <MediaContent name={pokemon.pokemon_name} minLevel={pokemon.min_level} frontImgSrc={pokemon.front_def}/>)
        : <h2>Loading..</h2>
      }

    </div>
  );
}

const useStyle = makeStyles({
  containerStyle: { display: "table-cell" },
});

export default EvolutionOptionContent;
