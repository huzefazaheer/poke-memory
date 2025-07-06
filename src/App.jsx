import { useEffect, useState } from 'react'
import './App.css'
import Card from './card'

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=> {
    async function getData() {
      const dataToGet = ["https://pokeapi.co/api/v2/pokemon/pikachu", "https://pokeapi.co/api/v2/pokemon/raichu", "https://pokeapi.co/api/v2/pokemon/togepi", "https://pokeapi.co/api/v2/pokemon/squirtle","https://pokeapi.co/api/v2/pokemon/wartortle","https://pokeapi.co/api/v2/pokemon/blastoise","https://pokeapi.co/api/v2/pokemon/charmander","https://pokeapi.co/api/v2/pokemon/charmeleon","https://pokeapi.co/api/v2/pokemon/charizard","https://pokeapi.co/api/v2/pokemon/bulbasaur","https://pokeapi.co/api/v2/pokemon/ivysaur","https://pokeapi.co/api/v2/pokemon/venusaur","https://pokeapi.co/api/v2/pokemon/ditto","https://pokeapi.co/api/v2/pokemon/butterfree","https://pokeapi.co/api/v2/pokemon/eevee","https://pokeapi.co/api/v2/pokemon/psyduck"]
      const p = []
      for(let i=0; i<dataToGet.length; i++){
        const response = await fetch(dataToGet[i])
        const data = await response.json()
        p.push(data)
      }
      setPokemon(p)
    }
    getData()
  }, [])

  const cards = pokemon.map(pok => {
    return(
      <Card onClick={()=>{
        if(!clickedIds.includes(pok.name)){
          setCurrentScore(currentScore+1)
          setClickedIds([...clickedIds, pok.name])
        }else{
          setClickedIds([])
          if(currentScore>highScore) setHighScore(currentScore)
          setCurrentScore(0)
        }
        shuffle(pokemon)
      }} key={pokemon.name} pokemon={pok}></Card>
    )
  })

  function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

  return (
    <>
    <nav>
      <h2>PokeMemory</h2>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </nav>
      <div className='gamewrapper'>
          {cards}
      </div>
    </>
  )
}

export default App
