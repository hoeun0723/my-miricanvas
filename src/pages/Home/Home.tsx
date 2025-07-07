import Canvas from '../../components/Canvas/Canvas';
import Sidebar from '../../components/Sidebar/Sidebar';
import Toolbar from '../../components/Toolbar/Toolbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Toolbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.canvasScrollArea}>
        <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Home;