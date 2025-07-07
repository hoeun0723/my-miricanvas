import { useState } from 'react';
import type {ReactNode} from 'react';
import { CanvasElementsContext } from './CanvasElementsContext';
import type { CanvasElementsContextType} from './CanvasElementsContext';
import type { CanvasElement } from '../constants/canvasElementsTypes';

interface Props {
  children: ReactNode;
}

const CanvasElementsProvider = ({ children }: Props) => {
  const [elements, setElements] = useState<CanvasElement[]>([]);

  const addElement = (item: Omit<CanvasElement, 'id'>) => {
    const newElement: CanvasElement = { ...item, id: crypto.randomUUID() };
    setElements((prev) => [...prev, newElement]);
  };

   const moveElement = (id: string, x: number, y: number) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, x, y } : el))
    );
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  const value: CanvasElementsContextType = {
    elements,
    addElement,
    moveElement,
    removeElement,
  };

  return (
    <CanvasElementsContext.Provider value={value}>
      {children}
    </CanvasElementsContext.Provider>
  );
};

export default CanvasElementsProvider;
