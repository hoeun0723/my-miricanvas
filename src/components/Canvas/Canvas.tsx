import styles from './Canvas.module.css';
import { useCanvasElements } from '../../context/useCanvasElements';

const Canvas = () => {
  const { elements } = useCanvasElements();

  return (
    <div className={styles.canvas}>
      {elements.map(({ id, type, value, x, y }) => (
        <div
          key={id}
          className={styles.element}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            cursor: 'pointer',
            fontSize: type === 'text' ? '16px' : '24px',
            userSelect: 'none',
          }}
          aria-label={`${type} element: ${value}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Canvas;
