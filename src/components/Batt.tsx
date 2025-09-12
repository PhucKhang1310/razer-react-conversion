import styles from "../styles/batt.module.scss";

interface BattProps{
  "data-tooltip"?: string;
}

const Batt = ({ "data-tooltip": dataTooltip }: BattProps) => {
  return <div className={`${styles.batt} ${styles["batt-30"]}`} data-tooltip={dataTooltip} />;
};

export default Batt;
