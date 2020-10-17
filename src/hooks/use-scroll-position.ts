import { MutableRefObject, useCallback, useRef, useLayoutEffect } from "react";

const isBrowser = typeof window !== `undefined`;

type ElementCoordinates = {
  x: number;
  y: number;
};

export type ElementPositions = {
  previousPosition: ElementCoordinates;
  currentPosition: ElementCoordinates;
};

const getScrollPosition = (
  scrollElementRef?: MutableRefObject<HTMLElement>,
  useWindow?: boolean
): ElementCoordinates => {
  // not a browser
  if (!isBrowser) return { x: 0, y: 0 };
  // using the window
  if (useWindow) return { x: window.scrollX, y: window.scrollY };
  // by element position
  const target = scrollElementRef?.current || document.body;
  const position = target.getBoundingClientRect();
  return { x: position.left, y: position.top };
};

export function useScrollPosition(
  effectCallback: (positions: ElementPositions) => void,
  deps?: any[],
  scrollElement?: MutableRefObject<HTMLElement>,
  useWindow?: boolean,
  wait?: number
) {
  const position = useRef(getScrollPosition(scrollElement, useWindow));

  const scrollCallBack = useCallback(() => {
    const currentPosition = getScrollPosition(scrollElement, useWindow);
    effectCallback({ previousPosition: position.current, currentPosition });
    position.current = currentPosition;
  }, [effectCallback, scrollElement, useWindow]);

  useLayoutEffect(() => {
    let throttleTimeout: number | null = null;

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(scrollCallBack, wait);
        }
      } else {
        scrollCallBack();
        throttleTimeout = null;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [deps, scrollCallBack, wait]);
}
