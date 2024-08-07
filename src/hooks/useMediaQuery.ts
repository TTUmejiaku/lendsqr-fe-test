import { useState, useEffect } from "react";

export function useMediaQuery(width: number) {
  const [isWindowAbove, setIsWindowAbove] = useState(
    window?.innerWidth > width
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(min-width: ${width}px)`);

    const handleResize = () => {
      setIsWindowAbove(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", handleResize);

    return () => mediaQueryList.removeEventListener("change", handleResize);
  }, [width]);

  return isWindowAbove;
}
