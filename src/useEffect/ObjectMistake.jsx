import React, { useState } from 'react';

const ObjectMistake = () => {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({ name: '', selected: true });

  return (
    <div>
      <input type='text' onChange={(event) => setName(event.target.value)} />
      <h1>Object Mistakes</h1>
      <button>Add name</button>
      <button>Selected</button>
      <p>{`Name : ${person.name}, Selected : ${person.selected}`}</p>
    </div>
  );
};

export default ObjectMistake;
