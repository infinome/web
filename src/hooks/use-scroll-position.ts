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
  if (useWindow !== false) {
    // console.log("using window");
    return {
      x: window.scrollX + window.innerWidth,
      y: window.scrollY + window.innerHeight
    };
  }
  // by element position
  const target = scrollElementRef?.current || document.body;
  const position = target.getBoundingClientRect();
  // const scrollPos = target.scrollY + target.contentHeight
  // return { x: position.left, y: position.top };
  return { x: position.right, y: position.bottom };
};

export type ScrollEffectCallback = (positions: ElementPositions) => void;

export function useScrollPosition(
  effectCallback: ScrollEffectCallback,
  delay?: number,
  deps?: any[],
  scrollElement?: MutableRefObject<HTMLElement>,
  useWindow?: boolean
) {
  const position = useRef(getScrollPosition(scrollElement, useWindow));

  const scrollCallback = useCallback(() => {
    const currentPosition = getScrollPosition(scrollElement, useWindow);
    effectCallback({ previousPosition: position.current, currentPosition });
    position.current = currentPosition;
  }, [effectCallback, scrollElement, useWindow]);

  useLayoutEffect(() => {
    let throttleTimeout: number | null = null;

    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(scrollCallback, delay);
        }
      } else {
        scrollCallback();
        throttleTimeout = null;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [deps, scrollCallback, delay]);
}
