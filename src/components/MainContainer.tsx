import styles from '../styles/mainContainer.module.scss';
import BodyWrapper from './BodyWrapper';
import NameBar from './NameBar';
import NavBar from './NavBar';
const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <BodyWrapper />
      <NameBar />
    </div>
  );
};

export default MainContainer;
