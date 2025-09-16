import { useEffect, useState } from "react";
import styles from "../styles/switch.module.scss";

interface SwitchProps {
  id: string;
  defaultOn?: boolean;
  isSliderSwitch?: boolean;
  onToggle?: (isOn: boolean) => void;
}

const Switch = ({ id, defaultOn = false, onToggle }: SwitchProps) => {
  const [isOn, setIsOn] = useState(defaultOn);

  useEffect(() => {
    setIsOn(defaultOn);
  }, [defaultOn]);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <div id={id} className={`${styles.switch} ${isOn ? styles.on : ""}`} onClick={handleClick}>
      <div className={styles.handle} />
    </div>
  );
};

export default Switch;
