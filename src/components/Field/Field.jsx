import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

const changeCurrentPlayer = (currentPlayer)=> {
  return currentPlayer === 'X' ? '0' : 'X';
}

const Field = ({field,setField,currentPlayer,setCurrentPlayer,setIsDraw,isGameEnded,setIsGameEnded}) => {
  const onCellClick = (index)=>{

      const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
      
      ];
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
  return <FieldLayout field={field} onCellClick={onCellClick} isGameEnded = {isGameEnded}/>;
};

Field.propTypes = {
  field:PropTypes.arrayOf(PropTypes.oneOf(['X','0',''])),
  setField:PropTypes.func.isRequired,
  currentPlayer:PropTypes.oneOf(['X','0']).isRequired,
  setCurrentPlayer:PropTypes.func.isRequired,
  isGameEnded:PropTypes.bool.isRequired,
  setIsGameEnded:PropTypes.func.isRequired,
  setIsDraw:PropTypes.func.isRequired
}

export default Field;