import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState('');

  const handleAddHero = useCallback(
    hero => {
      setHeroes([...heroes, hero]);
      setNewHero('');
    },
    [heroes]
  );

  useEffect(() => {
    const storageHeroes = localStorage.getItem('heroes');

    if (storageHeroes) {
      setHeroes(JSON.parse(storageHeroes));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroes]);

  const heroSize = useMemo(() => heroes.length, [heroes]);

  return (
    <>
      <ul>
        {heroes.map(hero => (
          <li key={hero}>{hero}</li>
        ))}
      </ul>
      <strong>Você tem {heroSize} heróis</strong>
      <br />
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
