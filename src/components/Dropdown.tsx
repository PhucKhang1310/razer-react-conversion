import styles from '../styles/dropdown.module.scss';

const Dropdown = () => {
  return (
    <div className={styles.dropdownArea}>
      <div className={styles.dropdown}> 
        <div className={styles.selected}>Selected Item</div>
        <div className={`${styles.icon} ${styles.expand}`}></div>
      </div>
    </div>
  );
};

export default Dropdown;
