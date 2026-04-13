import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

const Field = ({field,onCellClick,isGameEnded}) => {
  return <FieldLayout field={field} onCellClick={onCellClick} isGameEnded = {isGameEnded}/>;
};

Field.propTypes = {
  field:PropTypes.arrayOf(PropTypes.oneOf(['X','0',''])),
  isGameEnded:PropTypes.bool.isRequired,
  onCellClick:PropTypes.func.isRequired,
}

export default Field;