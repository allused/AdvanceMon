import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

function EvolutionOptionContent(props) {
  const [evolutionChain, setEvolutionChain] = useState(null);
  const[allEvoData, setEvolutionData] = useState([]);
  const style = useStyle();

useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${props.pokemonId}/`)
    .then((res) => {
        axios(
            `${res.data.evolution_chain.url}`
          ).then((res) => {
              setEvolutionChain(res.data);
              console.log(evolutionChain, res.data ,props.pokemonId)
              getEvolutionsData(res.data);
          });
    })
}, [])

  const getEvolutionsData = (evoChainData) => {
    let currentEvolution = evoChainData.chain;
    let evolutionChain = [];

    do {
      let evolutionsCount = currentEvolution["evolves_to"].length;
      evolutionChain.push({
        pokemon_name: currentEvolution.species.name,
        min_level: !currentEvolution ? 1 : currentEvolution.min_level,
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
        
     {allEvoData != null ?
     allEvoData.map(pokemon => <h2>{pokemon.pokemon_name}</h2>)
     : <h2>Loading..</h2>
     }
    </div>
  );
}

const useStyle = makeStyles({
  containerStyle: { display: "table-cell" },
});

export default EvolutionOptionContent;
