import PropTypes from 'prop-types'
import PokemonList  from './components/PokemonList';
import PokemonDetail  from './components/PokemonDetail';
import Navbar  from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import TypeList from './components/TypeList';
import ThemeContext from './components/ThemeContext';
import React, {useEffect, useState} from 'react'

function App() {

  // const [isLightTheme, setTheme] = useState(true);

  // const toggleTheme = () => setTheme(!isLightTheme);


  return (
    <Router>
        <div className="container">
        {/* <ThemeContext.Provider > value={{isLightTheme, toggleTheme}} */}
        <Navbar/>
        <Route path="/pokemon/:id" component={PokemonDetail}/>
        <Route path="/list"  component={PokemonList}/>
        <Route path="/types" component={TypeList}/>
        {/* </ThemeContext.Provider> */}
        </div>
      </Router>
  )
}

export default App
