import { useState } from "react";
import styles from "../styles/dots3.module.scss";
import hoverBorder from "../styles/hoverBorder.module.scss";

interface Dots3Props {
  onClick?: () => void;
}

const Dots3 = ({ onClick }: Dots3Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  

  return (
    <div className={`${hoverBorder.hoverBorder} ${styles.dots3} ${isActive ? styles.active : ""}`} onClick={onClick}>
      <div className={`${styles.profileAct} ${isActive ? styles.show : ""}`}>
        <div className={styles.action}>add</div>
        <div className={styles.action}>import</div>
        <div className={styles.divider}></div>
        <div className={styles.action}>rename</div>
        <div className={styles.action}>duplicate</div>
        <div className={styles.action}>export</div>
        <div className={styles.divider}></div>
        <div className={styles.action}>delete</div>
      </div>
    </div>
  );
};

export default Dots3;
