
import type { ElementType } from '../../type/canvasElementsTypes';
import styles from './Sidebar.module.css';

interface SidebarItemProps {
  type: ElementType;
  value: string;
  onClick: (type: ElementType, value: string) => void;
}

const SidebarItem = ({ type, value, onClick }: SidebarItemProps) => {
  return (
    <div
      className={styles.item}
      onClick={() => onClick(type, value)}
      role="button"
      aria-label={`추가할 요소 ${value}`}
      tabIndex={0}
    >
      {value}
    </div>
  );
};

export default SidebarItem;
