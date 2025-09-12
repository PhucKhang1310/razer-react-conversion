import styles from "../styles/profileBar.module.scss";
import Batt from "./Batt";
import Dots3 from "./Dots3";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import Obm from "./Obm";

const ProfileBar = () => {
  return (
    <div className={styles.profileBar}>
      <Loader />
      <div className={styles.profileText}>profile</div>
      <Dropdown />
      <Dots3 />
      <Obm />
      <div className={styles.divider} />
      <Batt />
    </div>
  );
};

export default ProfileBar;
