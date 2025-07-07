import type { CanvasElement } from '../../constants/canvasElementsTypes';
import useCanvasElements from '../../context/useCanvasElements';
import styles from './Canvas.module.css';

const Canvas = () => {
  const { elements, moveElement, removeElement } = useCanvasElements();

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    const newX = e.clientX - 50;
    const newY = e.clientY - 50;
    moveElement(id, newX, newY);
  };

  return (
    <div className={styles.canvas}>
      {elements.map((el: CanvasElement) => (
        <div
          key={el.id}
          className={styles.element}
          style={{ left: el.x, top: el.y }}
          draggable
          onDragEnd={(e) => handleDragEnd(e, el.id)}
        >
          <span className={styles.value}>{el.value}</span>
          <button
            className={styles.deleteButton}
            onClick={() => removeElement(el.id)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Canvas;
