import styles from './Sidebar.module.css';
import type { ElementType } from '../../constants/elements';
import { ELEMENTS } from '../../constants/elements';
import SidebarItem from './SidebarItem';
import { RESUME_DATA } from '../../constants/resumeData';
import { useCanvasContext } from '../../context/CanvasContext/CanvasContext';

const Sidebar = () => {
  const { addElement, selectedProjects, toggleProject } = useCanvasContext();

  const handleClick = (type: ElementType, value: string) => {
    console.log(`선택됨: [${type}] ${value}`);
    const x = Math.floor(Math.random() * 250) + 50;
    const y = Math.floor(Math.random() * 250) + 50;

    addElement({ type, value, x, y });
  };

  return (
    <aside className={styles.sidebar}>
      <section>
        <h3>이모지</h3>
        <div className={styles.group}>
          {ELEMENTS.emojis.map((emoji) => (
            <SidebarItem key={emoji} type="emoji" value={emoji} onClick={handleClick} />
          ))}
        </div>
      </section>

      <section>
        <h3>도형</h3>
        <div className={styles.group}>
          {ELEMENTS.shapes.map((shape) => (
            <SidebarItem key={shape} type="shape" value={shape} onClick={handleClick} />
          ))}
        </div>
      </section>

      <section>
        <h3>텍스트</h3>
        <div className={styles.group}>
          {ELEMENTS.texts.map((text) => (
            <SidebarItem key={text} type="text" value={text} onClick={handleClick} />
          ))}
        </div>
      </section>

      <section>
        <h3>색상 강조</h3>
        <div className={styles.group}>
          {/* 색상 선택 버튼들 (예시용) */}
          {['--color-anchor-text', '--color-highlight', '--color-primary'].map((colorVar) => (
            <button
              key={colorVar}
              style={{
                backgroundColor: `var(${colorVar})`,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log(`${colorVar} 강조 적용`);
                // 추후 구현: 중요한 단어의 색상 변경
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <h3>프로젝트 선택 (최대 2개)</h3>
        <div className={styles.group}>
          {RESUME_DATA.projects.map((project) => {
            const isSelected = selectedProjects.some((p) => p.name === project.name);
            return (
              <label key={project.name} style={{ display: 'block', marginBottom: '6px' }}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleProject(project)}
                  disabled={!isSelected && selectedProjects.length >= 2}
                />
                <span style={{ marginLeft: '6px' }}>{project.name}</span>
              </label>
            );
          })}
        </div>
      </section>

      <section>
        <h3>경험 추가</h3>
        <div className={styles.group}>
          <button
            className={styles.actionBtn}
            onClick={() => {
              console.log('수상내역 요소 추가');
              // 구현: 지정된 위치에 수상내역 element 추가
            }}
          >
            🏆 수상내역 추가
          </button>
          <button
            className={styles.actionBtn}
            onClick={() => {
              console.log('교육내역 요소 추가');
              // 구현: 지정된 위치에 교육내역 element 추가
            }}
          >
            🎓 교육내역 추가
          </button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
