import { isBrowser } from './index';

type BrowserStorageValue<T> = T extends string ? string : Record<string, unknown>

interface BrowserStorage {
  set: <T extends string | Record<string, unknown>>(key: string, value: T) => void
  get: <T extends string | Record<string, unknown>>(key: string) => BrowserStorageValue<T> | null
  reset: () => void
}

const browserStorage: BrowserStorage = {
  set: (key, value) => {
  const serializedValue = typeof value === 'string' ? value : JSON.stringify(value);
  if (isBrowser) {
    localStorage.setItem(key, serializedValue);
  }
},
get: key => {
  if (!isBrowser) return null;
  const item = localStorage.getItem(key);
  if (item === null) return null;
  try {
    return JSON.parse(item);
  } catch {
    return item;
  }
},
reset: () => {
  if (isBrowser) {
    localStorage.clear();
  }
},
}

export default browserStorage