import React from 'react';

const Events = () => {
  function handelclick() {
    console.log('clikced');
  }

  const hanldeConsleName = (firstname) => {
    console.log(`Hello ${firstname}`);
  };

  const HandleClick = (event) => {
    console.log(event);
  };
  return (
    <div>
      <h1>Events</h1>
      <button onClick={handelclick}>Click me</button>
      <button onDoubleClick={handelclick}>Click me</button>
      <button
        onClick={() => {
          hanldeConsleName('Mindia');
        }}
      >
        Click me
      </button>
      <button
        onClick={(event) => {
          HandleClick(event);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Events;
