import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export const Timer = () => {
  const {
    seconds,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div>
      <span>00</span>:<span>{seconds.toString().padStart(2, '0')}</span>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}