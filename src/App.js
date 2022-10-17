import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: `https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png`,
    id: "0"
  })

  const [pokemon01, setPokemon01] = useState({
    name: "Bulbasaur",
    type: "Grass - Poison",
    evolved: false,
    weight: 6.9,
    color: 'lightgreen',
    image: `https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png`,
    id: "01"
  })

  const [pokemon05, setPokemon05] = useState({
    name: "Charmeleon",
    type: "Fire",
    evolved: false,
    weight: 19,
    color: 'orangered',
    image: `https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png`,
    id: "05"
  })

  const [pokemon08, setPokemon08] = useState({
    name: "Wartortle",
    type: "Water",
    evolved: false,
    weight: 22.5,
    color: 'lightblue',
    image: `https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png`,
    id: "08"
  })

  function pokemonEvolve() {
    if(pokemon.name === "Pikachu"){
      setPokemon({...pokemon, name: "Raichu", evolved: true, weight: "30", image: "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png", id: "26"})
    }else if(pokemon.name ==="Pichu"){
    setPokemon({...pokemon, name: "Pikachu", evolved: true, weight: "6", image: "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png", id: "25"})
    }
  }

  function pokemonEvolve01() {
    if(pokemon01.name === "Ivysaur"){
      setPokemon01({...pokemon01, name: "Venusaur", evolved: true, weight: "100", image: "https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png", id: "03"})
    }else if(pokemon01.name === "Bulbasaur"){
    setPokemon01({...pokemon01, name: "Ivysaur", evolved: true, weight: "13", image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png", id: "02"})
    }
  }

  function pokemonEvolve05() {
    setPokemon05({...pokemon05, name: "Charizard", evolved: true, weight:"90.5", image: "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png", id: "06"})
  }

  function pokemonEvolve08() {
    setPokemon08({...pokemon08, name: "Blastoise", evolved: true, weight:"85.5", image: "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png", id: "09"})
  }



  // Para fazer seus próximos pokemons, crie novos estados!

  return ( <>
  <GlobalStyles/>

    <FlexContainer>
      <PokemonCard
      name = {pokemon.name}
      type = {pokemon.type}
      evolved = {pokemon.evolved}
      weight = {pokemon.weight}
      color = {pokemon.color}
      img = {pokemon.image}
      id = {pokemon.id}
      evoluir = {pokemonEvolve}
      />

      <PokemonCard
      name = {pokemon01.name}
      type = {pokemon01.type}
      evolved = {pokemon01.evolved}
      weight = {pokemon01.weight}
      color = {pokemon01.color}
      img = {pokemon01.image}
      id = {pokemon01.id}
      evoluir = {pokemonEvolve01}
      />

      <PokemonCard
      name = {pokemon05.name}
      type = {pokemon05.type}
      evolved = {pokemon05.evolved}
      weight = {pokemon05.weight}
      color = {pokemon05.color}
      img = {pokemon05.image}
      id = {pokemon05.id}
      evoluir = {pokemonEvolve05}
      />
      
      <PokemonCard
      name = {pokemon08.name}
      type= {pokemon08.type}
      evolved = {pokemon08.evolved}
      weight = {pokemon08.weight}
      color = {pokemon08.color}
      img = {pokemon08.image}
      id = {pokemon08.id}
      evoluir = {pokemonEvolve08}
      />

    </FlexContainer>
  </>
    
  );
}

export default App;
