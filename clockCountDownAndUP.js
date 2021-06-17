import React, { useState } from 'react';

const Clock = () => {
  let initialState = '00';
  const [hours, setHours] = useState(initialState);
  const [minutes, setMinutes] = useState(initialState);

  function hoursUp() {
    if (Number(hours) === 23) {
      setHours(initialState);
    } else {
      setHours((hours) => Number(hours) + 1);
    }
  }
  function hoursDown() {
    if (Number(hours) === 0) {
      setHours(23);
    } else {
      setHours((hours) => Number(hours) - 1);
    }
  }
  function minutesUP() {
    if (Number(minutes) === 59) {
      hoursUp();
      setMinutes(initialState);
    } else {
      setMinutes((minutes) => Number(minutes) + 1);
    }
  }
  function minutesDown() {
    if (Number(minutes) === 0) {
      hoursDown();
      setMinutes(59);
    } else {
      setMinutes((minutes) => Number(minutes) - 1);
    }
  }
  function formatTime(time) {
    if (Number(time) < 10 && time !== '00') {
      return `0${time}`;
    } else {
      return time;
    }
  }
  return (
    <>
      <div>
        <span>
          {formatTime(hours)}: {formatTime(minutes)}
        </span>
      </div>
      <div>
        <button onClick={hoursUp}>hours up</button>
        <button onClick={hoursDown}>hours down</button>
        <button onClick={minutesUP}>minutes up</button>
        <button onClick={minutesDown}>minutes down</button>
      </div>
    </>
  );
};
export default Clock;
