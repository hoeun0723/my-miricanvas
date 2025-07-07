import { useContext } from "react";
import { CanvasElementsContext } from './CanvasElementsContext';

const useCanvasElements = () => {
  const context = useContext(CanvasElementsContext);
  if (!context) {
    throw new Error('useCanvasElements must be used within CanvasElementsProvider');
  }
  return context;
};

export default useCanvasElements