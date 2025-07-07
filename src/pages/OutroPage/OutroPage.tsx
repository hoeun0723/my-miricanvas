import { useNavigate } from 'react-router-dom';
import styles from './OutroPage.module.css';

const OutroPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>“저는 단순한 유저가 아닌,</h1>
      <h1 className={styles.title}>미리디 철학을 직접 구현해본 개발자입니다.”</h1>

      <p className={styles.paragraph}>
        미리디의 셀프 디자인 철학은 저에게 큰 영감을 주었습니다.
        <br />
        이 프로젝트는 그 철학을 제가 해석하고 구현해본 결과물입니다.
      </p>

      <p className={styles.paragraph}>
        인터랙션을 통해 저를 소개할 수 있는 이 경험 자체가,
        <br />
        제가 어떤 개발자인지를 가장 잘 보여주는 방법이라고 생각합니다.
      </p>

      <button className={styles.button} onClick={() => navigate('/')}>
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default OutroPage;
