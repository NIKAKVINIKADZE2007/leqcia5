import React from 'react';

const Inline = () => {
  const inlineStyle = {
    cardStyle: {
      textAlign: 'center',
      margin: '20px auto',
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
    },
    imageStyle: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    titleStyle: {
      color: '#333',
      fontSize: '20px',
      margin: '10px 0',
    },
    descriptionStyle: {
      color: '#666',
      fontSize: '16px',
    },
  };

  return (
    <div style={inlineStyle.cardStyle}>
      <img
        style={inlineStyle.imageStyle}
        src='https://via.placeholder.com/150'
        alt='placeholder'
      />
      <h1 style={inlineStyle.titleStyle}>Inline</h1>
      <p style={inlineStyle.descriptionStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa harum
        aspernatur sunt repellendus nesciunt sed deleniti eaque porro illum hic
        alias error odio, animi expedita dicta ea. Eos, quo temporibus.
      </p>
    </div>
  );
};

export default Inline;
