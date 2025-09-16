import { useState } from 'react';
import styles from '../styles/widget.module.scss';
import Slider from './Slider';
import Switch from './Switch';
import Tooltip from './Tooltip';
const WidgetTopRight = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={styles.widget}>
      <Tooltip tipText="This is a tooltip" />
      <div className={styles.title}>
        sidetone
        <span className={styles.switchContainer}>
          <Switch id="swSidetone" defaultOn={false} onToggle={setIsOn} />
        </span>
      </div>
      <Slider id="slSidetone" minText="0" maxText="100" disabled={!isOn} />
    </div>
  );
};

export default WidgetTopRight;
