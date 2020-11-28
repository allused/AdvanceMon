import {BrowserRouter as Router, Link} from 'react-router-dom';
import React from 'react';
import ThemeToggle from './ThemeToggle';

function NavBar() {
    return (
        <div className="nav-menu" style={navBar}>
            {/* <ThemeToggle/> */}
            <div style={navDivStyle}><Link to="/list" style={linkStyle}>Pokemons</Link></div>
            <div style={navDivStyle}><Link to="/types" style={linkStyle}>Pokemon Types</Link></div>
        </div>
    )
}



const linkStyle = {
    textDecoration: 'none'
}

const navBar = {
    display: 'flex',
    backgroundColor: '#ff0000cf'
}

const navDivStyle = {
    border: '1px solid black',
    margin: 'auto',
    textAlign: 'center',
    alignContent: 'center',
    padding: '5px',
    margin:'15px',
    marginTop: '30px',
    borderRadius: '3px',
    backgroundColor: 'aliceblue'
}

export default NavBar
