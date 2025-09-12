import styles from '../styles/checkbox.module.scss'

interface CheckboxProps {
    id: string;
    label: string;

}

const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <div className={styles.checkItem}>
      <input type="checkbox" id={id} className={styles.checkBox} />
      <label htmlFor={id} className={styles.checkBox}><div className={styles.checkText}>{label}</div></label>
    </div>
  )
}

export default Checkbox