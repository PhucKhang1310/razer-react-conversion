import styles from "../styles/widget.module.scss";
import Checkbox from "./Checkbox";
import Tooltip from "./Tooltip";

const WidgetBottomRight = () => {
  return (
    <div className={styles.widget}>
      <Tooltip tipText="This is a tooltip" />
      <div className={styles.title}>enhancements</div>
      <Checkbox id="checkNorm" label="Volume Normalization" />
      <Checkbox id="checkAmb" label="Ambient Noise Reduction" />
      <Checkbox id="checkClarity" label="Voice Clarity" />
    </div>
  );
};

export default WidgetBottomRight;
