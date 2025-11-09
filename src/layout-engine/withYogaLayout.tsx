import React from 'react';
import yoga, { type Node } from 'yoga-layout';

import { StylesDisplay } from '../StylesDisplay';
import { YogaStyleMapper } from './YogaStyleMapper';

import './styles.css';

const VISUAL_STYLES_TO_KEEP = [
  'backgroundColor',
  'background',
  'color',
  'fontSize',
  'fontFamily',
  'fontWeight',
  'textAlign',
  'textDecoration',
  'border',
  'outline',
  'borderRadius',
  'boxShadow',
  'opacity',
  'transform',
  'transition',
  'cursor',
] as const;

const filterStyles = (originalStyle: any) =>
  Object.fromEntries(
    VISUAL_STYLES_TO_KEEP.map(key => [key, originalStyle[key]]).filter(
      ([, value]) => value !== undefined,
    ),
  );

const measureTextContent = (element: React.ReactElement<any>) => {
  if (!element.props.children) return;

  const textContent = extractText(element.props.children);

  if (!textContent) return;

  const tempDiv = document.createElement('div');
  tempDiv.textContent = textContent;
  tempDiv.style.cssText = `
    position: absolute;
    visibility: hidden;
  `;

  document.body.appendChild(tempDiv);
  const minWidth = tempDiv.offsetWidth;
  const minHeight = tempDiv.offsetHeight;
  document.body.removeChild(tempDiv);

  return { minWidth, minHeight };
};

function buildYogaTree(element: React.ReactElement<any>): Node {
  const yogaNode = yoga.Node.create();
  YogaStyleMapper.applyStyles(yogaNode, { ...measureTextContent(element), ...element.props.style });

  React.Children.forEach(element.props.children, child => {
    if (React.isValidElement(child)) {
      yogaNode.insertChild(buildYogaTree(child), yogaNode.getChildCount());
    }
  });

  return yogaNode;
}

const extractText = (node: any): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join('');
  return '';
  if (!React.isValidElement(node)) return '';
  return React.Children.map((node.props as any).children, extractText)?.join('') ?? '';
};

const getComputedLayout = (yogaNode: Node) => ({
  left: yogaNode.getComputedLeft(),
  top: yogaNode.getComputedTop(),
  width: yogaNode.getComputedWidth(),
  height: yogaNode.getComputedHeight(),
});

function replaceStylesWithComputed(
  element: React.ReactElement<any>,
  yogaNode: Node,
): React.ReactElement<any> {
  const newChildren = React.Children.map(element.props.children, (child, childIndex) => {
    if (React.isValidElement(child)) {
      return replaceStylesWithComputed(child, yogaNode.getChild(childIndex));
    }
    return child;
  });

  return React.cloneElement(
    element,
    {
      style: {
        ...filterStyles(element.props.style || {}),
        ...getComputedLayout(yogaNode),
        position: 'absolute',
      },
    },
    newChildren,
  );
}

interface YogaLayoutOptions {
  containerWidth?: number;
  containerHeight?: number;
}

export const withYogaLayout =
  (element: React.ReactElement<any>, options: YogaLayoutOptions = {}) =>
  () => {
    const { containerWidth = 500, containerHeight = 500 } = options;

    const rootYogaNode = buildYogaTree(element);

    try {
      rootYogaNode.calculateLayout(containerWidth, containerHeight, yoga.DIRECTION_LTR);

      const computedElement = replaceStylesWithComputed(element, rootYogaNode);

      return (
        <>
          <div className="render-root">{element}</div>
          <StylesDisplay />
          <div className="render-root">{computedElement}</div>
        </>
      );
    } catch (error) {
      console.error(error);
      return 'ERROR';
    } finally {
      rootYogaNode.unsetMeasureFunc();
      rootYogaNode.freeRecursive();
    }
  };
