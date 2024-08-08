import React, { useEffect, useRef } from 'react';
import { useTypingContext } from '../context/TypingContext';

const TextInput = ({ text }) => {
  const { inputValue, setInputValue, setErrors, startTime, setStartTime, isTestCompleted } = useTypingContext();
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    if (!startTime) setStartTime(Date.now());
    const value = e.target.value;
    setInputValue(value);

    // Обработка ошибок
    if (text[value.length - 1] !== value[value.length - 1]) {
      setErrors(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (isTestCompleted) {
      // Убираем фокус с поля ввода при завершении теста
      if (inputRef.current) {
        inputRef.current.blur();
      }
    } else {
      // Восстанавливаем фокус на поле ввода при перезапуске теста
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isTestCompleted]);

  return (
    <textarea
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      style={{ width: '100%', height: '150px', padding: '10px', marginTop: '20px', borderRadius: '10px', fontSize: '20px' }}
      placeholder="Начните печатать здесь..."
      disabled={isTestCompleted}
    />
  );
};

export default TextInput;
