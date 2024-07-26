import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // let timer = setInterval(() => {
    //   setCounter((prev) => prev + 1);
    // }, 1000);

    // return () => clearInterval(timer);
    console.log('sheiqmna');

    return console.log('waishala');
  }, [counter]);

  return (
    <div>
      <h1>Counter: {counter} fasdfsad</h1>
    </div>
  );
};

export default TimerComponent;
