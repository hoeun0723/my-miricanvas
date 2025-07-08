import { useNavigate } from 'react-router-dom';
import useThemeMode from '../../context/ThemeContext/useThemeMode';
import { downloadCanvasAsPDF } from '../../utils/downloadPdf';
import styles from './Toolbar.module.css';

const Toolbar = () => {
  const navigate = useNavigate();
  const { states, actions } = useThemeMode();
  const { isDarkMode } = states;
  const { themeToggler } = actions;

  const handlePdfDownload = () => {
  const canvasElement = document.getElementById('canvas');
  if (canvasElement) {
    downloadCanvasAsPDF(canvasElement);
  }
};

  return (
    <header className={styles.header}>
      <span className={styles.title}>🧡 미니 미리캔버스</span>

      <div className={styles.actions}>
        <button onClick={()=>navigate('/outro')} className={styles.navigateButton}>
          🖇️ outro 바로가기
        </button>
        <button onClick={themeToggler} className={styles.themeToggleButton}>
          {isDarkMode ? '🌞 라이트 모드' : '🌙 다크 모드'}
        </button>
        <button
            onClick={handlePdfDownload}
            className={styles.pdfButton}
          >
            📄 PDF 저장
          </button>
      </div>
    </header>
  );
};

export default Toolbar;
