import { useNavigate } from 'react-router-dom';
import styles from './IntroPage.module.css';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>“미리캔버스로 이력서를 디자인해본 적 있으신가요?”</h1>
      <p className={styles.paragraph}>
        저는 이력서를 넘어, 저 자신을 디자인해봤습니다.
        <br />
        평소 미리캔버스를 정말 좋아했고, 자주 활용해왔습니다.
      </p>
      <p className={styles.paragraph}>
        개발자로서 어느 날 생각했습니다. <br />
        “내가 좋아하는 미리디 서비스를 내가 구현해보면 어떨까?”
      </p>
      <button className={styles.button} onClick={() => navigate('/home')}>
        나를 디자인하러 가기 →
      </button>
    </div>
  );
};

export default IntroPage;