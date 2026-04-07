import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';

const Information = ({isDraw,isGameEnded,currentPlayer}) => {
  let label;
  let badge;
  if(isDraw){
    label='Ничья'
   badge='🤝'
  } else {
    if(isGameEnded){
      label='Победил ✨'
     badge=`${currentPlayer}`
    } else {
      label='Ходит'
     badge=`${currentPlayer}`
    }
  }
  return <InformationLayout label={label} badge={badge}/>
};

Information.propTypes ={
  isDraw:PropTypes.bool.isRequired,
  isGameEnded:PropTypes.bool.isRequired,
  currentPlayer:PropTypes.oneOf(['X','0']).isRequired
}
export default Information;