import styles from "../styles/profileBar.module.scss";
import tip from "../styles/icontip.module.scss"

import Batt from "./Batt";
import Dots3 from "./Dots3";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import Obm from "./Obm";

const ProfileBar = () => {
  return (
    <div className={`${styles.profileBar} ${tip.tipContainer}`}>
      <Loader />
      <div className={styles.profileText}>profile</div>
      <Dropdown />
      <Dots3 />
      <span data-tooltip="On-Board Memory">
        <Obm />
      </span>
      <div className={styles.divider} />
      <span data-tooltip="30% Battery">
        <Batt />
      </span>
    </div>
  );
};

export default ProfileBar;
