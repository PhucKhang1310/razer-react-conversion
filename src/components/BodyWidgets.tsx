import styles from "../styles/bodyWidget.module.scss";
import WidgetBottomRight from "./WidgetBottomRight";
import WidgetLeft from "./WidgetLeft";
import WidgetTopRight from "./WidgetTopRight";
const BodyWidgets = () => {
  return (
    <div className={styles.bodyWidgets}>
      <div className={`${styles.widgetCol} col-left`}>
        <WidgetLeft />
      </div>
      <div className={`${styles.widgetCol} col-right`}>
        <WidgetTopRight />
        <WidgetBottomRight />
      </div>
    </div>
  );
};

export default BodyWidgets;
