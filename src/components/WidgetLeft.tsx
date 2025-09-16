import { useState } from "react";
import styles from "../styles/widget.module.scss";
import Slider from "./Slider";
import Switch from "./Switch";
import Tooltip from "./Tooltip";

const WidgetLeft = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isSensOn, setIsSensOn] = useState(true);
  return (
    <div className={styles.widget}>
      <Tooltip tipText='This is a tooltip' />
      <div className={styles.title}>
        microphone
        <span className={styles.switchContainer}>
          <Switch id='swMic' defaultOn={isMicOn} onToggle={setIsMicOn} />
        </span>
      </div>
      <div className={styles.h2Title}>mic volume</div>
      <Slider id='slMic' min={10} defaultValue={55} disabled={!isMicOn} />
      <div className={styles.h2Title} style={{ marginTop: "20px" }}>
        mic sensitivity
        <span className={styles.switchContainer}>
          <Switch id='swSens' defaultOn={isSensOn} onToggle={setIsSensOn} />
        </span>
      </div>
      <div className={styles.h2Body}>
        Adjust this setting to remove unwanted background noise or increase the amount of mic output heard
      </div>
      <Slider id='slSens' min={10} defaultValue={55} disabled={!isSensOn} />
    </div>
  );
};

export default WidgetLeft;
