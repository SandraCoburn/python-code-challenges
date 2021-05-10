import React, { memo, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((count) => count + 1);
  };
  const decreaseCounter = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increaseCounter}>Increase counter: {counter}</button>
      <button onClick={decreaseCounter}>Decrease counter: {counter}</button>
      <ChildComponent />
    </div>
  );
};

export default Counter;

const ChildComponent = memo(() => {
  //Child component => without React.memo, any time a user click on either the decrease counter or
  // increaseCounter button this will re-render
  return (
    <div>
      <h1>I am a child component</h1>
      <small> When using memo, I won't re-render unnecessarily</small>
    </div>
  );
});
