export const emptyDOORect: DOMRect = {
  height: 0,
  width: 0,
  x: 0,
  y: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON: () => ""
};

export const getRefClientRect = (el: Element | null): DOMRect => {
  if (!el) {
    return emptyDOORect;
  }
  return !el ? emptyDOORect : el.getBoundingClientRect();
};

export const getScrollPosition = (el: Element | null): number => {
  if (!el) {
    return 0;
  }
  return !el ? 0 : getRefClientRect(el).top;
};
