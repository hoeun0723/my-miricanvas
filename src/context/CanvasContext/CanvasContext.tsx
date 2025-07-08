/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';
import type {ReactNode} from 'react';
import type { Project } from '../../type/resumeDataType';
import type { CanvasElement } from '../../type/canvasElementsTypes';

export type ElementType = 'emoji' | 'shape' | 'text' | 'project';

export type CanvasElementInput = Omit<CanvasElement, 'id'>;

interface CanvasContextType {
  elements: CanvasElement[];
  addElement: (element: CanvasElementInput) => void;
  moveElement: (id: string, x: number, y: number) => void;
  removeElement: (id: string) => void;
  selectedProjects: Project[];
  toggleProject: (project: Project) => void;
}

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);

  const addElement = (element: CanvasElementInput) => {
    const id = crypto.randomUUID(); // 고유 ID 생성
    setElements((prev) => [...prev, { id, ...element }]);
  };

  const moveElement = (id: string, x: number, y: number) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, x, y } : el))
    );
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  const toggleProject = (project: Project) => {
  setSelectedProjects((prev) => {
    const exists = prev.some((p) => p.name === project.name);
    return exists
      ? prev.filter((p) => p.name !== project.name)
      : [...prev, project];
  });
};

  const value = useMemo(
    () => ({
      elements,
      addElement,
      moveElement,
      removeElement,
      selectedProjects,
      toggleProject,
    }),
    [elements]
  );

  return (
    <CanvasContext.Provider value={value} >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => {
  const context = useContext(CanvasContext);
  if (!context) {
    throw new Error('useCanvasContext must be used within CanvasProvider');
  }
  return context;
};
