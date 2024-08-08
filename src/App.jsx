import React from 'react';
import { TypingProvider } from './context/TypingContext';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import ResultsScreen from './components/ResultsScreen';
import RestartButton from './components/RestartButton';

const textToType = "Ребята пошли в лес за грибами. Рома нашел под березой красивый подберезовик. Валя увидела под сосной маленький масленок. Сережа разглядел в траве огромный боровик. В роще они набрали полные корзины разных грибов. Ребята веселые и довольные вернулись домой.";

function App() {

  return (
    <TypingProvider>
      <div style={containerStyles}>
        <h1>Typing Speed Trainer</h1>
        <div style={textInputContainerStyles}>
          <TextDisplay text={textToType} />
          <TextInput text={textToType} />
          <ResultsScreen text={textToType} />
          <RestartButton />
        </div>
      </div>
    </TypingProvider>
  );
}

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '20px'
};

const textInputContainerStyles = {
  width: '30%',
  minWidth: '300px',
  maxWidth: '100%',
  fontSize: '17px',
  fontWeight: 'bold'
  
};

export default App;
