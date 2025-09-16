import styles from "../styles/batt.module.scss";

interface BattProps {
  dataTooltip?: string;
}

const Batt = ({ dataTooltip: dataTooltip }: BattProps) => {
  return <div className={`${styles.batt} ${styles["batt-30"]}`} data-tooltip={dataTooltip} />;
};

export default Batt;
