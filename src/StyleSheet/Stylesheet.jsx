import React from 'react';
import './Stylesheet.css';
const Stylesheet = (props) => {
  return (
    <div>
      <h1>Stylesheet</h1>
      <div className='card'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-content'>{props.content}</p>
      </div>
    </div>
  );
};

export default Stylesheet;
