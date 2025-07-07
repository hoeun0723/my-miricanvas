import styles from './Sidebar.module.css';
import type { ElementType } from '../../constants/elements';
import {ELEMENTS} from '../../constants/elements';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const handleClick = (type: ElementType, value: string) => {
    // TODO: 선택된 요소를 상태로 올려서 Canvas로 전달할 수 있게!
    console.log(`선택됨: [${type}] ${value}`);
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