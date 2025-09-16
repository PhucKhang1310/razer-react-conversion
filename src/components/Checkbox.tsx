import styles from "../styles/checkbox.module.scss";

interface CheckboxProps {
  id: string;
  label: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ id, label, onChange }: CheckboxProps) => {
  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };
  return (
    <div className={styles.checkItem}>
      <input type='checkbox' id={id} className={styles.checkBox} onChange={onCheckboxChange} />
      <label htmlFor={id} className={styles.checkBox}>
        <div className={styles.checkText}>{label}</div>
      </label>
    </div>
  );
};

export default Checkbox;
