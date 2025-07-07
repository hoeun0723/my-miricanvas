import { useRef, useState } from 'react';
import useCanvasElements from '../../context/useCanvasElements';
import styles from './Canvas.module.css';

const Canvas = () => {
  const { elements, moveElement, removeElement } = useCanvasElements();
  const dragOffset = useRef({ x: 0, y: 0 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showDeleteHint, setShowDeleteHint] = useState<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id: string
  ) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleDragEnd = (
    e: React.DragEvent<HTMLDivElement>,
    id: string
  ) => {
    const canvasRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (!canvasRect) return;

    const newX = e.clientX - canvasRect.left - dragOffset.current.x;
    const newY = e.clientY - canvasRect.top - dragOffset.current.y;

    moveElement(id, newX, newY);
  };

  const handleClick = (id: string) => {
    if (showDeleteHint === id) {
      removeElement(id);
    } else {
      setShowDeleteHint(id);
      setTimeout(() => {
        setShowDeleteHint((prev) => (prev === id ? null : prev));
      }, 2000);
    }
  };

  return (
    <div className={styles.canvas}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`${styles.element} ${
            selectedId === el.id ? styles.selected : ''
          }`}
          style={{ left: el.x, top: el.y }}
          draggable
          onDragStart={(e) => handleDragStart(e, el.id)}
          onDragEnd={(e) => handleDragEnd(e, el.id)}
          onClick={() => setSelectedId(el.id)}
          onDoubleClick={() => handleClick(el.id)}
        >
          <span className={styles.value}>{el.value}</span>
          {showDeleteHint === el.id && (
            <div className={styles.hint}>한 번 더 클릭하면 삭제돼요!</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
