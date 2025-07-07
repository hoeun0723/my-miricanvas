import styles from './Sidebar.module.css';
import type { ElementType } from '../../constants/elements';
import { ELEMENTS } from '../../constants/elements';
import SidebarItem from './SidebarItem';
import { useCanvasElements } from '../../context/useCanvasElements';

const Sidebar = () => {
  const { addElement } = useCanvasElements();

  const handleClick = (type: ElementType, value: string) => {
    console.log(`선택됨: [${type}] ${value}`);
    // 랜덤 위치 (예: 50~300px 사이)
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
    </aside>
  );
};

export default Sidebar;
