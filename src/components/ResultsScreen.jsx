import React, { useEffect } from 'react';
import { useTypingContext } from '../context/TypingContext';

const ResultsScreen = ({ text }) => {
  const { inputValue, setInputValue, errors, setErrors, startTime, setStartTime, isTestCompleted, setIsTestCompleted, wordsPerMinute, setWordsPerMinute } = useTypingContext();

  useEffect(() => {
    if (inputValue.length > 0 && !startTime) {
      setStartTime(Date.now());
    }

    if (inputValue.length > 0 && startTime && !isTestCompleted) {
      const elapsedTime = (Date.now() - startTime) / 60000; // в минутах
      const wpm = Math.round((inputValue.length / 5) / elapsedTime); //Подсчёт слов в минуту
      setWordsPerMinute(wpm);
    }

    if (inputValue.length === text.length) {
      setIsTestCompleted(true);
    }
  }, [inputValue, startTime, text.length, isTestCompleted]);

  const handleRestart = () => {
    setInputValue('');
    setErrors(0);
    setStartTime(null);
    setWordsPerMinute(0);
    setIsTestCompleted(false);
  };

  return (
    <>
      {!isTestCompleted && (
        <div>
          <p>Скорость печати: {wordsPerMinute} WPM</p>
          <p>Ошибки: {errors}</p>
        </div>
      )}

      {isTestCompleted && (
        <>
          <div style={overlayStyles} />
          <div style={modalStyles}>
            <h2>Результаты</h2>
            <p>Скорость печати: {wordsPerMinute} WPM</p>
            <p>Количество ошибок: {errors}</p>
            <button onClick={handleRestart} style={buttonStyles}>
              Начать заново
            </button>
          </div>
        </>
      )}
    </>
  );
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999
};

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  borderRadius: '10px',
  textAlign: 'center',
  width: '80%',
  maxWidth: '400px'
};

const buttonStyles = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#FFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ResultsScreen;
