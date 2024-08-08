import React from 'react';
import { useTypingContext } from '../context/TypingContext';

const RestartButton = () => {
  const { setInputValue, setErrors, setStartTime, setWordsPerMinute, setIsTestCompleted } = useTypingContext();

  const handleRestart = () => {
    setInputValue('');
    setErrors(0);
    setStartTime(null);
    setWordsPerMinute(0);
    setIsTestCompleted(false);
  };

  return (
    <button onClick={handleRestart}>Начать заново</button>
  );
};

export default RestartButton;
