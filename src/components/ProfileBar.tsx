import styles from "../styles/profileBar.module.scss";
import tip from "../styles/icontip.module.scss";

import Batt from "./Batt";
import Dots3 from "./Dots3";
import Dropdown from "./Dropdown";
import Loader from "./Loader";
import Obm from "./Obm";
import DeleteAlert from "./DeleteAlert";
import { useState } from "react";

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
  const [alertVisibile, setAlertVisible] = useState(false);
  const onClick = (value: string) => {
    if (value === "delete") {
      setAlertVisible(true);
    }
  }

  return (
    <div className={`${styles.profileBar} ${tip.tipContainer}`}>
      <Loader />
      <div className={styles.profileText}>profile</div>
      <Dropdown id="profile-dropdown" options={profiles} defaultSelected={4} />
      <Dots3 onClick={onClick} />
      <span className={styles.profileDel}>
        <DeleteAlert visible={alertVisibile} onClose={() => setAlertVisible(false)} />
      </span>
      <Obm data-tooltip="On-Board Memory" />
      <div className={styles.divider} />
      <Batt data-tooltip="30% Battery" />
    </div>
  );
};

export default ProfileBar;
