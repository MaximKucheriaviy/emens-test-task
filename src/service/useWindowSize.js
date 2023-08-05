import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = (event) => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return size;
};
