import type { ElementsType, ElementType } from "../type/canvasElementsTypes";


export const ELEMENTS:ElementsType = {
  emojis: ['🌸', '🌟', '🔥', '💡'],
  shapes: ['⬛️', '⬜️', '🔺', '🔵'],
  texts: ['LED 전구가 되고 싶은 백열전구', '망고같은 개발자', '스스로 길을 만드는 개발자'],
  colors: ['--highlight-color-1',
      '--highlight-color-2',
      '--highlight-color-3',
      '--highlight-color-4',
      '--highlight-color-5',
      '--highlight-color-6',],
};


export interface ElementItem {
  type: ElementType;
  value: string;
}
