import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({field,onCellClick,isGameEnded}) => {
  return (
    <div className={styles.board}>
      {field.map((value,indx)=>(
        <button 
          key={indx} 
          className={styles.cell} 
          onClick={()=>onCellClick(indx)}
          disabled={value!==''|| isGameEnded}>
            {value}
        </button>))}
    </div>
  );
};

FieldLayout.propTypes = {
  field:PropTypes.arrayOf(PropTypes.oneOf(['X','0',''])).isRequired,
  onCellClick:PropTypes.func.isRequired,
  isGameEnded:PropTypes.bool.isRequired
}

export default FieldLayout;