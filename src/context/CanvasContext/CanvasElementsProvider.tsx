/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react';
import type { CanvasElement } from '../../type/canvasElementsTypes';

interface Props {
  children: ReactNode;
}

export interface CanvasElementsContextType {
  elements: CanvasElement[];
  addElement: (item: Omit<CanvasElement, 'id'>) => void;
  moveElement: (id: string, x: number, y: number) => void;
  removeElement: (id: string) => void;
}

const CanvasElementsContext = createContext<CanvasElementsContextType | undefined>(undefined);

export const CanvasElementsProvider = ({ children }: Props) => {
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

export const useCanvasElements = () => {
  const context = useContext(CanvasElementsContext);
  if (!context) {
    throw new Error('useCanvasElements must be used within CanvasElementsProvider');
  }
  return context;
};