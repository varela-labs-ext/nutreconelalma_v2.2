import { useEffect } from "react";
import localforage from "localforage";

export const useAutosave = (key: string, data: any, delay: number = 1000) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      localforage.setItem(key, data);
    }, delay);

    return () => clearTimeout(timeout);
  }, [key, data, delay]);
};
