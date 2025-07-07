import useThemeMode from '../context/ThemeContext/useThemeMode';

const Toolbar = () => {
    const { states, actions } = useThemeMode();
  const { isDarkMode } = states;
  const { themeToggler } = actions;

  
     return (
    <header
      style={{
        height: '60px',
        backgroundColor: 'var(--color-background)',
        borderBottom: '1px solid var(--color-table-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        color: 'var(--color-text)',
      }}
    >
      <span style={{ fontWeight: 'bold' }}>🧡 미니 미리캔버스</span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={themeToggler}
          style={{
            backgroundColor: 'var(--color-category-chip)',
            borderRadius: '6px',
            padding: '6px 10px',
            color: 'var(--color-text)',
            fontWeight: 500,
          }}
        >
          {isDarkMode ? '🌞 라이트 모드' : '🌙 다크 모드'}
        </button>

        <button
          style={{
            backgroundColor: 'var(--color-primary)',
            borderRadius: '6px',
            padding: '6px 12px',
            color: 'white',
            fontWeight: 600,
          }}
        >
          저장하기
        </button>
      </div>
    </header>
  );
};

export default Toolbar;