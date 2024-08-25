import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function isLocalStorageEmpty(item) {
  if (window !== undefined) return !localStorage.getItem(item);
}

export function getLocalStorage(item) {
  if (window !== undefined)
    return JSON.parse(localStorage.getItem(item));
}

export function setLocalStorage(itemName, item) {
  if (window !== undefined)
    return (localStorage.setItem(itemName, JSON.stringify(item)));
}
