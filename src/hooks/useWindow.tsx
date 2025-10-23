"use client";
import { useEffect, useState } from "react";

export default function useWindow() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeHandler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resizeHandler();

    addEventListener("resize", resizeHandler);
    return () => {
      removeEventListener("resize", resizeHandler);
    };
  }, []);

  return size;
}
