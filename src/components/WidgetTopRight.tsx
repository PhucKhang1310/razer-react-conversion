import styles from "../styles/widget.module.scss";
import Slider from "./Slider";
import Switch from "./Switch";
import Tooltip from "./Tooltip";
const WidgetTopRight = () => {
  return (
    <div className={styles.widget}>
      <Tooltip tipText="This is a tooltip" />
      <div className={styles.title}>sidetone
        <span className={styles.switchContainer}>
            <Switch />
        </span>
      </div>
      <Slider />
    </div>
  )
}

export default WidgetTopRight