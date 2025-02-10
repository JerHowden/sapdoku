'use client';

import { useEffect, useState } from 'react';

// export const useLocalStorage = <T>(
//   key: string | number,
//   defaultValue: T
// ): [T, (newValue: T) => void] => {
//   const skey = String(key);
//   // Create state variable to store
//   // localStorage value in state
//   const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
//     try {
//       const value = localStorage.getItem(skey);
//       // If value is already present in
//       // localStorage then return it

//       // Else set default value in
//       // localStorage and then return it
//       if (value) {
//         return JSON.parse(value);
//       } else {
//         localStorage.setItem(skey, JSON.stringify(defaultValue));
//         return defaultValue;
//       }
//     } catch (error) {
//       localStorage.setItem(skey, JSON.stringify(defaultValue));
//       console.error('useLocalStorage Error: ', error);
//       return defaultValue;
//     }
//   });

//   // this method update our localStorage and our state
//   const setLocalStorageStateValue = (newValue: T) => {
//     localStorage.setItem(skey, JSON.stringify(newValue));
//     setLocalStorageValue(newValue);
//   };
//   return [localStorageValue, setLocalStorageStateValue];
// };

export const useLocalStorage = <T>(
  keyParam: string | number,
  defaultValue: T
): [T, (newValue: T) => void] => {
  const key = String(keyParam);
  const [storage, _setStorage] = useState<T>(defaultValue);
  useEffect(() => {
    const handleStorage = () => {
      const item = localStorage.getItem(key);
      _setStorage(item ? JSON.parse(item) : defaultValue);
    };

    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [defaultValue, key]);
  const setStorage = (data: unknown) => {
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  };
  return [storage, setStorage];
};
