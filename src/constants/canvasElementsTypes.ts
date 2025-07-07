export type ElementType = 'emoji' | 'shape' | 'text';

export interface CanvasElement {
  id: string;
  type: ElementType;
  value: string;
  x: number;
  y: number;
}
