import { useState } from "react";
import styles from "../styles/dots3.module.scss";
import hoverBorder from "../styles/hoverBorder.module.scss";

interface Dots3Props {
  onClick?: (value: string) => void;
}

const Dots3 = ({ onClick }: Dots3Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  

  return (
    <div className={`${hoverBorder.hoverBorder} ${styles.dots3} ${isActive ? styles.active : ""}`} onClick={handleClick}>
      <div className={`${styles.profileAct} ${isActive ? styles.show : ""}`}>
        <div className={styles.action} onClick={() => onClick?.("add")}>add</div>
        <div className={styles.action} onClick={() => onClick?.("import")}>import</div>
        <div className={styles.divider}></div>
        <div className={styles.action} onClick={() => onClick?.("rename")}>rename</div>
        <div className={styles.action} onClick={() => onClick?.("duplicate")}>duplicate</div>
        <div className={styles.action} onClick={() => onClick?.("export")}>export</div>
        <div className={styles.divider}></div>
        <div className={styles.action} onClick={() => onClick?.("delete")}>delete</div>
      </div>
    </div>
  );
};

export default Dots3;
