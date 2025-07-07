export const ELEMENTS: {
  emojis: string[];
  shapes: string[];
  texts: string[];
} = {
  emojis: ['🌸', '🌟', '🔥', '💡'],
  shapes: ['⬛️', '⬜️', '🔺', '🔵'],
  texts: ['나를 표현하는 말', '성격', '협업 스타일'],
};

export type ElementType = 'emoji' | 'shape' | 'text';

export interface ElementItem {
  type: ElementType;
  value: string;
}
