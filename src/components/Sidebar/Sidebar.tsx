import styles from './Sidebar.module.css';
import { ELEMENTS } from '../../constants/elements';
import SidebarItem from './SidebarItem';
import { RESUME_DATA } from '../../constants/resumeData';
import { useCanvasContext } from '../../context/CanvasContext/CanvasContext';
import type { ElementType } from '../../type/canvasElementsTypes';

const Sidebar = () => {
  const { addElement, selectedProjects, toggleProject,toggleAwards, toggleEducation, showAwards, showEducation,selectedColor,setSelectedColor,setSelectedText } = useCanvasContext();

  const handleClick = (type: ElementType, value: string) => {
    console.log(`선택됨: [${type}] ${value}`);
    const x = Math.floor(Math.random() * 250) + 50;
    const y = Math.floor(Math.random() * 250) + 50;

    addElement({ type, value, x, y });
  };
  

  return (
    <aside className={styles.sidebar}>
      <section>
        <h4>이모지</h4>
        <div className={styles.group}>
          {ELEMENTS.emojis.map((emoji) => (
            <SidebarItem key={emoji} type="emoji" value={emoji} onClick={handleClick} />
          ))}
        </div>
      </section>

      <section>
        <h4>도형</h4>
        <div className={styles.group}>
          {ELEMENTS.shapes.map((shape) => (
            <SidebarItem key={shape} type="shape" value={shape} onClick={handleClick} />
          ))}
        </div>
      </section>

      <section>
        <h4>텍스트</h4>
        <div className={styles.group}>
          {ELEMENTS.texts.map((text) => (
            <SidebarItem key={text} type="text" value={text} onClick={(_, value) => setSelectedText(value)} />
          ))}
        </div>
      </section>

      <section>
        <h4>색상 변경</h4>
        <div className={styles.group}>
          {ELEMENTS.colors.map((colorVar) => (
            <button
              key={colorVar}
              style={{
                backgroundColor: `var(${colorVar})`,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '2px solid #ccc',
                cursor: 'pointer',
                outline: selectedColor === colorVar ? '3px solid black' : 'none',
              }}
              aria-label={`색상 ${colorVar}`}
              onClick={() => setSelectedColor(colorVar)}
            />
          ))}
        </div>
      </section>

      <section>
        <h4>프로젝트 선택 (최대 2개)</h4>
        <div className={styles.group}>
          {RESUME_DATA.projects.map((project) => {
            const isSelected = selectedProjects.some((p) => p.name === project.name);
            const disableCheckbox = !isSelected && selectedProjects.length >= 2;
            return (
              <label key={project.name} style={{ display: 'block', marginBottom: '6px' }}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleProject(project)}
                  disabled={disableCheckbox}
                  aria-checked={isSelected}
                  aria-disabled={disableCheckbox}
                />
                <span style={{ marginLeft: '6px' }}>{project.name}</span>
              </label>
            );
          })}
        </div>
      </section>

      <section>
        <h4>경험 추가</h4>
        <div className={styles.group}>
        <button className={styles.actionBtn} onClick={toggleAwards}>
          {showAwards ? '🏆 수상내역 숨기기' : '🏆 수상내역 보이기'}
        </button>
        <button className={styles.actionBtn} onClick={toggleEducation}>
          {showEducation ? '🎓 교육내역 숨기기' : '🎓 교육내역 보이기'}
        </button>
      </div>
      </section>
    </aside>
  );
};

export default Sidebar;
