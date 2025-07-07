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

  const value: CanvasElementsContextType = {
    elements,
    addElement,
  };

  return (
    <CanvasElementsContext.Provider value={value}>
      {children}
    </CanvasElementsContext.Provider>
  );
};

export default CanvasElementsProvider;
