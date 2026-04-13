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

  const WIN_PATTERNS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
    [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

  const changeCurrentPlayer = (currentPlayer)=> {
    return currentPlayer === 'X' ? '0' : 'X';
  }

  const onCellClick = (index)=>{
    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    let win = WIN_PATTERNS.some(pattern =>{
      const [i,j,k] = pattern;
      const values = [newField[i],newField[j],newField[k]]
      return values[0]!=='' && values.every(v => v === values[0])
    })
    if (win){
      setIsGameEnded(true);
    } else{
      if(newField.every(cell=>cell!=='')){
        setIsDraw(true)
      } else{
        setCurrentPlayer(changeCurrentPlayer(currentPlayer))  
      }
    }
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
        onCellClick={onCellClick} 
        isGameEnded={isGameEnded}
      />
    </GameLayout>
  );
};

export default Game;