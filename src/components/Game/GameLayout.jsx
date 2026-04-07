import styles from "./GameLayout.module.css"
import PropTypes from "prop-types";

const GameLayout = ({children,startNewGame}) => {
  return (
    <div className={styles.gameCard}>
      {children}
      <div className={styles.resetSection}>
        <button className={styles.resetBtn} onClick={startNewGame}>⟲ Начать заново</button>
      </div>
    </div>
  );
};
GameLayout.propTypes = {
  startNewGame:PropTypes.func.isRequired,
  children:PropTypes.node.isRequired
}

export default GameLayout;