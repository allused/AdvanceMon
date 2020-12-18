import PokemonList  from './components/PokemonList';
import PokemonDetail  from './components/PokemonDetail/PokemonDetail';
import PokedexList from './components/PokedexList/PokedexList';
import Navbar  from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import TypeList from './components/TypeList';
import ThemeContext from './components/ThemeContext';
import React, {useState} from 'react'

function App() {


  const [isLightTheme, setTheme] = useState(true);

  const toggleTheme = () => {setTheme(!isLightTheme)};

  return (
    <Router>
        <div className="container">
        <ThemeContext.Provider value={isLightTheme}> 
          <Navbar toggle={toggleTheme}/>
          <Route path="/pokemon/:id" render={(props)=>(<PokemonDetail toggleTheme={toggleTheme}/>)}/>
          <Route path="/" component={PokedexList}/>
          <Route path="/list"  render={(props)=>(<PokemonList toggleTheme={toggleTheme}/>)}/>
          <Route path="/types" component={TypeList}/>
        </ThemeContext.Provider>
        </div>
    </Router>
  )
}

export default App
