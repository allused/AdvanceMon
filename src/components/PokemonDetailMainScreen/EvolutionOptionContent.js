import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

function EvolutionOptionContent(props) {
  const[allEvoData, setEvolutionData] = useState([]);
  const style = useStyle();

useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonId}/`)
    .then((res) => {
        axios(
            `${res.data.evolution_chain.url}`
          ).then((res) => {
              getEvolutionsData(res.data);
          });
    })
}, [])

useEffect(() => {
  if (allEvoData !== []){
    allEvoData.map(pokemon => {
      axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_name}`)
      .then((res) => Object.assign(pokemon, {front_def: res.data.sprites.front_default,
        back_def: res.data.sprites.back_default}))
    })
  }
}, allEvoData)

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
        allEvoData != null ?
      
      <h2>smth</h2>
      
        
        : <h2>Loading..</h2>
      }

    </div>
  );
}

const useStyle = makeStyles({
  containerStyle: { display: "table-cell" },
});

export default EvolutionOptionContent;
