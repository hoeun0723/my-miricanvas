import useThemeMode from '../../context/ThemeContext/useThemeMode';
import { downloadCanvasAsPDF } from '../../utils/downloadPdf';
import styles from './Toolbar.module.css';

const Toolbar = () => {
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
        <button
            onClick={handlePdfDownload}
            className={styles.pdfButton}
          >
            📄 PDF 저장
          </button>
        <button onClick={themeToggler} className={styles.themeToggleButton}>
          {isDarkMode ? '🌞 라이트 모드' : '🌙 다크 모드'}
        </button>

        <button className={styles.saveButton}>저장하기</button>
      </div>
    </header>
  );
};

export default Toolbar;
