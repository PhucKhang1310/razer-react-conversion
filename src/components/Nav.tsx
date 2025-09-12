import styles from "../styles/nav.module.scss";

interface NavProps {
  title?: string;
  active?: boolean;
  disabled?: boolean;
  back?: boolean;
  forward?: boolean;
}

const Nav = ({ title, active, disabled, back, forward }: NavProps) => {
  return (
    <>
      {title && (
        <a
          className={`${styles.nav} ${active && styles.active} ${
            disabled && styles.disabled
          }`}
        >
          {title}
        </a>
      )}
      {back && (
        <div
          className={`${styles.nav} ${styles.arrow} ${styles.back} ${active && styles.active} ${disabled && styles.disabled}`}
        />
      )}
      {forward && (
        <div
          className={`${styles.nav} ${styles.arrow} ${styles.forward} ${active && styles.active} ${disabled && styles.disabled}`}
        />
      )}
    </>
  );
};

export default Nav;
