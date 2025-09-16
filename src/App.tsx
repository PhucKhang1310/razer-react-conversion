import './App.css';
import styles from './styles/app.module.scss';
import BodyWrapper from './components/BodyWrapper.tsx';
import NameBar from './components/NameBar.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <BodyWrapper />
      <NameBar />
    </div>
  );
}

export default App;
