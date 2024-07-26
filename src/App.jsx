import React, { useEffect, useState } from 'react';
// import Stylesheet from './StyleSheet/Stylesheet';
// import Inline from './Inline/inline';
// import Modules from './Modules/Modules';
// import SccHeader from './SccsHeader/ScssHeader';
// import Events from './Events/Events';
// import Header from './Header/Header';
import Newstate from './useEffect/NewState';
import Second from './useEffect/SeondChild';
import ObjectMistake from './useEffect/ObjectMistake';
import TimerComponent from './useEffect/TimerComponent';

const App = () => {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {}, [count]);
  return (
    <>
      {/* <div>Hello world</div> */}
      {/* <button>click me</button>

      <div>{count && <Newstate />}</div> */}
      {/* 
      <div>
        <Second count={count} />
        <button onClick={countHandler}>click me</button>
      </div> */}

      <ObjectMistake />
      <TimerComponent />
    </>
  );
};

export default App;
