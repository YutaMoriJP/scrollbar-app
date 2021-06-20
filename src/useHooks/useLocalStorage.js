import { useEffect } from "react";

const setStorage = (keyName, state) => {
  return typeof state === "object"
    ? localStorage.setItem(keyName, JSON.stringify(state))
    : localStorage.setItem(keyName, state);
};

export const getStorage = keyName => {
  try {
    return JSON.parse(localStorage.getItem(keyName));
  } catch (error) {
    console.log("getStorage returns this");
    return localStorage.getItem(keyName);
  }
};

const useLocalStorage = (keyName, state) => {
  useEffect(() => {
    console.log("useLocalStorage useEffect called");
    setStorage(keyName, state);
  }, [keyName, state]);
  return {
    clear: () => localStorage.removeItem(keyName),
  };
};

export default useLocalStorage;
