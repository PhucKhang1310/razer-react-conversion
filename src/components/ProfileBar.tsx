import styles from "../styles/profileBar.module.scss";
import tip from "../styles/icontip.module.scss";

import Batt from "./Batt";
import Dots3 from "./Dots3";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import Obm from "./Obm";
import DeleteAlert from "./DeleteAlert";

const profiles = [
  "Default Profile",
  "Profile 2",
  "Profile 3",
  "Profile 4",
  "Profile 5",
  "Profile 6",
  "Profile 7",
  "Profile 8",
];

const ProfileBar = () => {
  return (
    <div className={`${styles.profileBar} ${tip.tipContainer}`}>
      <Loader />
      <div className={styles.profileText}>profile</div>
      <Dropdown id="profile-dropdown" options={profiles} defaultSelected={4} />
      <Dots3 />
      <div className={styles.profileDel}>
        <DeleteAlert />
      </div>
      <Obm data-tooltip="On-Board Memory" />
      <div className={styles.divider} />
      <Batt data-tooltip="30% Battery" />
    </div>
  );
};

export default ProfileBar;
