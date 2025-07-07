import { createContext } from 'react';
import type { CanvasElement } from '../constants/canvasElementsTypes';

export interface CanvasElementsContextType {
  elements: CanvasElement[];
  addElement: (item: Omit<CanvasElement, 'id'>) => void;
}

// context는 React 컴포넌트가 아니므로 이 파일엔 context만 export
export const CanvasElementsContext = createContext<CanvasElementsContextType | undefined>(undefined);
