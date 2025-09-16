import { useState } from "react";
import styles from "../styles/widget.module.scss";
import Checkbox from "./Checkbox";
import Tooltip from "./Tooltip";
import Slider from "./Slider";

const WidgetBottomRight = () => {
  const [isNormChecked, setIsNormChecked] = useState(false);
  const [isAmbChecked, setIsAmbChecked] = useState(false);
  const [isClarityChecked, setIsClarityChecked] = useState(false);

  return (
    <div className={styles.widget}>
      <Tooltip tipText='This is a tooltip' />
      <div className={styles.title}>enhancements</div>
      <Checkbox id='checkNorm' label='Volume Normalization' onChange={setIsNormChecked} />
      <Slider id='slNorm' isEnhancement={true} min={10} disabled={!isNormChecked} />
      <Checkbox id='checkAmb' label='Ambient Noise Reduction' onChange={setIsAmbChecked} />
      <Slider id='slAmb' isEnhancement={true} min={10} disabled={!isAmbChecked} />
      <Checkbox id='checkClarity' label='Voice Clarity' onChange={setIsClarityChecked} />
      <Slider id='slClarity' isEnhancement={true} min={10} disabled={!isClarityChecked} />
    </div>
  );
};

export default WidgetBottomRight;
