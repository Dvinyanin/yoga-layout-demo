import { HIGHLIGHT_CLASS, CHILDREN_HIGHLIGHT_CLASS } from './constants';

export const resetAllHighlights = (): void => {
  document.querySelectorAll(`.${HIGHLIGHT_CLASS}, .${CHILDREN_HIGHLIGHT_CLASS}`).forEach(el => {
    el.classList.remove(HIGHLIGHT_CLASS, CHILDREN_HIGHLIGHT_CLASS);
  });
};

export const getElementPath = (element: Element): number[] => {
  const path: number[] = [];
  let currentElement: Element | null = element;

  while (currentElement && currentElement.parentElement) {
    const parent: HTMLElement = currentElement.parentElement;
    const children = Array.from(parent.children);
    const index = children.indexOf(currentElement);

    if (index !== -1) {
      path.unshift(index);
    }

    currentElement = parent.classList.contains('render-root') ? null : parent;
  }

  return path;
};

export const findElementByPath = (root: Element, path: number[]): Element | null => {
  let currentElement: Element | null = root;

  for (const index of path) {
    if (!currentElement || !currentElement.children[index]) {
      return null;
    }
    currentElement = currentElement.children[index];
  }

  return currentElement;
};

export const highlightChildren = (element: Element): void => {
  const children = element.children;
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add(CHILDREN_HIGHLIGHT_CLASS);
  }
};

export const getInlineStyles = (
  element: HTMLElement,
  styleProperties: readonly string[],
): { key: string; value: string }[] => {
  return styleProperties
    .map(key => ({
      key,
      value: element.style.getPropertyValue(key),
    }))
    .filter(({ value }) => value);
};

export const getCorrespondingElements = (target: HTMLElement): HTMLElement[] => {
  const elementPath = getElementPath(target);
  const allRoots = document.querySelectorAll('.render-root');
  const correspondingElements: HTMLElement[] = [];

  allRoots.forEach(root => {
    const correspondingElement = findElementByPath(root, elementPath);
    if (correspondingElement) {
      correspondingElements.push(correspondingElement as HTMLElement);
    }
  });

  return correspondingElements;
};

export const highlightElements = (elements: HTMLElement[]): void => {
  elements.forEach(element => {
    element.classList.add(HIGHLIGHT_CLASS);
  });
};
