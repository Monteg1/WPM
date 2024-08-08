import React, { createContext, useState, useContext } from 'react';

const TypingContext = createContext();

export const TypingProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  return (
    <TypingContext.Provider value={{
      inputValue,
      setInputValue,
      errors,
      setErrors,
      startTime,
      setStartTime,
      isTestCompleted,
      setIsTestCompleted,
      wordsPerMinute,
      setWordsPerMinute
    }}>
      {children}
    </TypingContext.Provider>
  );
};

export const useTypingContext = () => useContext(TypingContext);
