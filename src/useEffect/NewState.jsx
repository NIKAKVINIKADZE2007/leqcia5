import React, { useEffect, useState } from 'react';

const Newstate = () => {
  useEffect(() => {
    console.log('კომპონენტი შეიქმნდა');

    return () => {
      console.log('კომპონენტი წაიშალა');
    };
  }, []);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Newstate;
