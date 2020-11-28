import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TypeList() {

    const[types, setTypes] = useState([])

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res => {
            console.log(res.data.results)
            setTypes(res.data.results)})
    }, [])

    return (
        <div className="type-container">
            {
                types.map(type => <div className="type-card" style={typeCardStyle}><h3>{type.name}</h3></div>)
            }
        </div>
    )
}

const typeCardStyle = {
    border: '2px solid black',
    borderRadius: '3px',
    display: 'inherit',
    justifyContent: 'center',
    width: '30%',
    fontFamily: 'Roboto'
}
export default TypeList
