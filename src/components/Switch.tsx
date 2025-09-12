import styles from '../styles/switch.module.scss'

const Switch = () => {
  return (
    <div className={`${styles.switch} ${styles.on}`}>
        <div className={styles.handle} />
    </div>
  )
}

export default Switch