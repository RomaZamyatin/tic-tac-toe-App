import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';
import { useState } from 'react';


const Game = () => {
  let defaultField = [
    '','','',
    '','','',
    '','',''
  ]

  const [field,setField] = useState([...defaultField])
  const [isGameEnded,setIsGameEnded] = useState(false);
  const [isDraw,setIsDraw] = useState(false);
  const [currentPlayer,setCurrentPlayer] = useState('X')

  const startNewGame = ()=>{
    setField(defaultField)
    setIsDraw(false)
    setCurrentPlayer('X')
    setIsGameEnded(false)
  }
 

  return (
    <GameLayout startNewGame={startNewGame}>
      <Information
        isDraw ={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
      <Field 
        field={field} 
        setField={setField} 
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
      />
    </GameLayout>
  );
};

export default Game;