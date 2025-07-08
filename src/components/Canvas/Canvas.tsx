import { useRef, useState } from 'react';
import styles from './Canvas.module.css';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import { useCanvasContext } from '../../context/CanvasContext/CanvasContext';

const Canvas = () => {
  const { elements, moveElement, removeElement } = useCanvasContext();
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
  const canvas = e.currentTarget.parentElement;
  if (!canvas) return;

  const canvasRect = canvas.getBoundingClientRect();
  const offsetX = dragOffset.current.x;
  const offsetY = dragOffset.current.y;

  let newX = e.clientX - canvasRect.left - offsetX;
  let newY = e.clientY - canvasRect.top - offsetY;

  const maxX = canvas.clientWidth - 60; 
  const maxY = canvas.clientHeight - 60;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

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
    <div className={styles.canvasContainer}>
    <div id="canvas" className={styles.canvasSheet}>
      <ResumeRenderer />
      {elements.map((el) => (
        <div
          key={el.id}
          className={`${styles.element} ${
            selectedId === el.id ? styles.selected : ''
          }`}
          style={{ position: 'absolute',left: el.x, top: el.y,zIndex: selectedId === el.id ? 10 : 1, }}
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
    </div>
  );
};

export default Canvas;
