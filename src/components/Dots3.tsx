import { forwardRef } from "react";
import styles from "../styles/dots3.module.scss";
import hoverBorder from "../styles/hoverBorder.module.scss";

interface Dots3Props {
  isActive?: boolean;
  deleteDisabled?: boolean;
  onClick?: () => void;
  onSelect?: (value: string) => void;
}

const Dots3 = forwardRef<HTMLDivElement, Dots3Props>(
  ({ onClick, onSelect, deleteDisabled, isActive }: Dots3Props, ref) => {
    return (
      <div
        ref={ref}
        className={`${hoverBorder.hoverBorder} ${styles.dots3} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        <div className={`${styles.profileAct} ${isActive ? styles.show : ""}`}>
          <div className={styles.action} onClick={() => onSelect?.("add")}>
            add
          </div>
          <div className={styles.action} onClick={() => onSelect?.("import")}>
            import
          </div>
          <div className={styles.divider}></div>
          <div className={styles.action} onClick={() => onSelect?.("rename")}>
            rename
          </div>
          <div className={styles.action} onClick={() => onSelect?.("duplicate")}>
            duplicate
          </div>
          <div className={styles.action} onClick={() => onSelect?.("export")}>
            export
          </div>
          <div className={styles.divider}></div>
          <div
            className={`${styles.action} ${deleteDisabled ? styles.disabled : ""}`}
            onClick={() => onSelect?.("delete")}
          >
            delete
          </div>
        </div>
      </div>
    );
  },
);

export default Dots3;
