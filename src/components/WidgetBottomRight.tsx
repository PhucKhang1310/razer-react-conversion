import styles from "../styles/widget.module.scss";
import Tooltip from "./Tooltip";

const WidgetBottomRight = () => {
  return (
    <div className={styles.widget}>
      <Tooltip tipText="This is a tooltip" />
      <div className={styles.title}>enhancements</div>
    </div>
  );
};

export default WidgetBottomRight;
