import './App.css';
import { Test } from './Test';
import React, { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const [characters, setCharacters] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {

    const getCharacters = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const charactersList = await res.json();

        setCharacters(charactersList.results);
      } catch (error) {
        console.log(error);
      }
    }

    if (count !== 0) {
      getCharacters();
    }
  }, [count]);

  return (
    <div className="App">
      <Test count={count} handleClick={handleClick} />
      {
        characters.map(({ name }) =>
          (
            <div key={name}>{name}</div>
          )
        )
      }
    </div>
  )
}

export default App;
