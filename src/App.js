import React, { useState, useEffect } from 'react';

function App() {
  const [heroes, setHeroes] = useState(['Thor', 'Capitã Mável']);
  const [newHero, setNewHero] = useState('');

  function handleAddHero(hero) {
    setHeroes([...heroes, hero]);
    setNewHero('');
  }

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
