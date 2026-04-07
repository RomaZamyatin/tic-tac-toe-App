import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({label,badge}) => {
  return (
    <div className={styles.playerInfo}>
        <span className={styles.playerLabel}>{label}</span>
        <div className={styles.playerBadge}>{badge}</div>
    </div>
  );
};

InformationLayout.propTypes = {
  label:PropTypes.string.isRequired,
  badge:PropTypes.string.isRequired
}

export default InformationLayout;