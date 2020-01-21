import React, { useState } from 'react';

function App() {
  const [heroes, setHeroes] = useState(['Thor', 'Capitã Mável']);

  return (
    <>
      <ul>
        {heroes.map(hero => (
          <li key={hero}>{hero}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
