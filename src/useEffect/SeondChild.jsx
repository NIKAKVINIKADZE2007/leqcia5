import React, { useEffect, useState } from 'react';

const Second = (props) => {
  const [vaucher, setVaucher] = useState(false);

  useEffect(() => {
    console.log('hello world');
    if (props.count === 7) {
      setVaucher(true);
    }
  }, [props.count]);
  return (
    <div>
      <h1>{props.count}</h1>
      {vaucher && <p>You win vaucher</p>}
    </div>
  );
};
export default Second;
