import React, { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState('');

  function handleAddHero(hero) {
    setHeroes([...heroes, hero]);
    setNewHero('');
  }

  useEffect(() => {
    const storageHeroes = localStorage.getItem('heroes');

    if (storageHeroes) {
      setHeroes(JSON.parse(storageHeroes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroes]);

  return (
    <>
      <ul>
        {heroes.map(hero => (
          <li key={hero}>{hero}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newHero}
        onChange={e => setNewHero(e.target.value)}
      />
      <button type="button" onClick={() => handleAddHero(newHero)}>
        Adicionar Herói
      </button>
    </>
  );
}

export default App;
