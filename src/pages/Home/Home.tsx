import CanvasArea from '../../components/CanvasArea';
import Sidebar from '../../components/Sidebar/Sidebar';
import Toolbar from '../../components/Toolbar';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Toolbar />
      <div className={styles.main}>
        <Sidebar />
        <CanvasArea />
      </div>
    </div>
  );
};

export default Home;