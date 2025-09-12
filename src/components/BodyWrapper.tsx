import styles from "../styles/bodyWrapper.module.scss";
import BodyWidgets from "./BodyWidgets";
import ProfileBar from "./ProfileBar";

const BodyWrapper = () => {
  return (
    <div className={`${styles.bodyWrapper} scrollable`}>
      <ProfileBar />
      <BodyWidgets/>
    </div>
  );
};

export default BodyWrapper;
