import axios from 'axios'
import React, { useState } from 'react'

const AxiosPokeApi = () => {
    const [pokemon, setPokemon] = useState([])

    const getPokeWithAxios = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {
                setPokemon(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div>
            <h1>Get Pokemon</h1>
            <ul>
                {pokemon.map((pokemonList, idx) =>
                    <li key={idx}> {pokemonList.name} </li>
                )}
            </ul>

            <button onClick={getPokeWithAxios}> Fetch Pokemon</button>
        </div>
    )
}

export default AxiosPokeApi