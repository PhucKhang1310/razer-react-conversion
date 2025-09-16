import styles from '../styles/navBar.module.scss';
import Nav from './Nav';
import NavUser from './NavUser';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Nav active back />
      <Nav forward disabled />
      <Nav title="sound" />
      <Nav title="mixer" />
      <Nav title="enhancement" />
      <Nav title="eq" />
      <Nav title="mic" active />
      <Nav title="lighting" />
      <Nav title="power" />
      <NavUser />
    </div>
  );
};

export default NavBar;
