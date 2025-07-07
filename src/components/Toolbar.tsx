const Toolbar = () => {
  return (
    <header
      style={{
        height: '60px',
        backgroundColor: '#fafafa',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      <span>🧡 미니 미리캔버스</span>
      <button>저장하기</button>
    </header>
  );
};

export default Toolbar;
