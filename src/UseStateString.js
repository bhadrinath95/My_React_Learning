import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('Guest');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    </div>
  );
}

export default Greeting;
