import PokemonDetail  from './components/PokemonDetail/PokemonDetail';
import PokedexList from './components/PokedexList/PokedexList';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import ThemeContext from './components/ThemeContext';
import React, {useState} from 'react'

function App() {


  const [isLightTheme, setTheme] = useState(true);

  const toggleTheme = () => {setTheme(!isLightTheme)};

  return (
    <Router>
        <div className="container">
        <ThemeContext.Provider value={isLightTheme}> 
          <Route path="/pokemon/:id" render={(props)=>(<PokemonDetail toggleTheme={toggleTheme}/>)}/>
          <Route path="/" render={(props)=>(<PokedexList toggleTheme={toggleTheme}/>)}/>
        </ThemeContext.Provider>
        </div>
    </Router>
  )
}

export default App
