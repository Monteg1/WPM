import React from 'react';
import { useTypingContext } from '../context/TypingContext';

const TextDisplay = ({ text }) => {
  const { inputValue } = useTypingContext();
  const splitText = text.split('');

  return (
    <div>
      {splitText.map((char, index) => {
        let color;
        if (index < inputValue.length) {
          color = inputValue[index] === char ? 'green' : 'red';
        }
        return (
          <span key={index} style={{ color: color }}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default TextDisplay;
