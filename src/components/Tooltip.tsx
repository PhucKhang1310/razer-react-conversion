import styles from '../styles/tooltip.module.scss';

interface TooltipProps {
    tipText?: string;
}


const Tooltip = ({ tipText }: TooltipProps) => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.help}></div>
      <div className={styles.tip}>{tipText}</div>
    </div>
  )
}

export default Tooltip