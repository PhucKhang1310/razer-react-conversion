import styles from "../styles/widget.module.scss";
import Slider from "./Slider";
import Switch from "./Switch";
import Tooltip from "./Tooltip";

const WidgetLeft = () => {
  return (
    <div className={styles.widget}>
      <Tooltip tipText="This is a tooltip" />
      <div className={styles.title}>
        microphone
        <span className={styles.switchContainer}>
          <Switch />
        </span>
      </div>
      <div className={styles.h2Title}>mic volume</div>
      <Slider />
      <div className={styles.h2Title} style={{ marginTop: "20px" }}>
        mic sensitivity
        <span className={styles.switchContainer}>
          <Switch />
        </span>
      </div>
      <div className={styles.h2Body}>
        Adjust this setting to remove unwanted background noise or increase the amount of mic output heard
      </div>
      <Slider />
    </div>
  );
};

export default WidgetLeft;
