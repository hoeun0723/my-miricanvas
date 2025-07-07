export type ElementType = 'emoji' | 'shape' | 'text';

export interface CanvasElement {
  id: string;
  type: ElementType;
  value: string;
  x: number;
  y: number;
}

export interface ElementsType{
  emojis: string[];
  shapes: string[];
  texts: string[];
}
