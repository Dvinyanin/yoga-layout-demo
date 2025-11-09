import {
  Align,
  Display,
  Edge,
  FlexDirection,
  Justify,
  Overflow,
  PositionType,
  Wrap,
  BoxSizing,
  Gutter,
  type Node,
} from 'yoga-layout';

export interface CssProperties {
  // Layout
  display?: 'flex' | 'none' | 'contents';
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;

  // Flexbox
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  // Alignment
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

  // Spacing
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;

  // Positioning
  position?: 'relative' | 'absolute';
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;

  // Border
  border?: number | string;
  borderTop?: number | string;
  borderRight?: number | string;
  borderBottom?: number | string;
  borderLeft?: number | string;

  // Other
  aspectRatio?: number;
  overflow?: 'visible' | 'hidden' | 'scroll';
  boxSizing?: 'border-box' | 'content-box';
  gap?: number | string;
}

export class YogaStyleMapper {
  static applyStyles(node: Node, styles: CssProperties) {
    for (const [key, value] of Object.entries(styles)) {
      if (value === undefined) continue;

      this.mappers[key as keyof CssProperties]?.(node, value);
    }
  }

  private static mappers = {
    // Layout
    display: (node: Node, value: CssProperties['display']) => {
      const map: Record<string, Display> = {
        flex: Display.Flex,
        none: Display.None,
        contents: Display.Contents,
      };
      node.setDisplay(map[value!] ?? Display.Flex);
    },

    width: (node: Node, value: CssProperties['width']) => {
      YogaStyleMapper.setDimension(node, 'setWidth', value);
    },

    height: (node: Node, value: CssProperties['height']) => {
      YogaStyleMapper.setDimension(node, 'setHeight', value);
    },

    minWidth: (node: Node, value: CssProperties['minWidth']) => {
      YogaStyleMapper.setDimension(node, 'setMinWidth', value);
    },

    minHeight: (node: Node, value: CssProperties['minHeight']) => {
      YogaStyleMapper.setDimension(node, 'setMinHeight', value);
    },

    maxWidth: (node: Node, value: CssProperties['maxWidth']) => {
      YogaStyleMapper.setDimension(node, 'setMaxWidth', value);
    },

    maxHeight: (node: Node, value: CssProperties['maxHeight']) => {
      YogaStyleMapper.setDimension(node, 'setMaxHeight', value);
    },

    // Flexbox
    flex: (node: Node, value: CssProperties['flex']) => {
      if (typeof value === 'number') {
        node.setFlex(value);
      } else if (typeof value === 'string') {
        const num = parseFloat(value);
        if (!isNaN(num)) node.setFlex(num);
      }
    },

    flexGrow: (node: Node, value: CssProperties['flexGrow']) => {
      if (typeof value === 'number') node.setFlexGrow(value);
    },

    flexShrink: (node: Node, value: CssProperties['flexShrink']) => {
      if (typeof value === 'number') node.setFlexShrink(value);
    },

    flexBasis: (node: Node, value: CssProperties['flexBasis']) => {
      YogaStyleMapper.setDimension(node, 'setFlexBasis', value);
    },

    flexDirection: (node: Node, value: CssProperties['flexDirection']) => {
      const map: Record<string, FlexDirection> = {
        row: FlexDirection.Row,
        'row-reverse': FlexDirection.RowReverse,
        column: FlexDirection.Column,
        'column-reverse': FlexDirection.ColumnReverse,
      };
      node.setFlexDirection(map[value!] ?? FlexDirection.Column);
    },

    flexWrap: (node: Node, value: CssProperties['flexWrap']) => {
      const map: Record<string, Wrap> = {
        nowrap: Wrap.NoWrap,
        wrap: Wrap.Wrap,
        'wrap-reverse': Wrap.WrapReverse,
      };
      node.setFlexWrap(map[value!] ?? Wrap.NoWrap);
    },

    // Alignment
    justifyContent: (node: Node, value: CssProperties['justifyContent']) => {
      const map: Record<string, Justify> = {
        start: Justify.FlexStart,
        'flex-start': Justify.FlexStart,
        'flex-end': Justify.FlexEnd,
        end: Justify.FlexEnd,
        center: Justify.Center,
        'space-between': Justify.SpaceBetween,
        'space-around': Justify.SpaceAround,
        'space-evenly': Justify.SpaceEvenly,
      };
      node.setJustifyContent(map[value!] ?? Justify.FlexStart);
    },

    alignItems: (node: Node, value: CssProperties['alignItems']) => {
      const map: Record<string, Align> = {
        start: Align.FlexStart,
        'flex-start': Align.FlexStart,
        'flex-end': Align.FlexEnd,
        end: Align.FlexEnd,
        center: Align.Center,
        stretch: Align.Stretch,
        baseline: Align.Baseline,
      };
      node.setAlignItems(map[value!] ?? Align.Stretch);
    },

    alignContent: (node: Node, value: CssProperties['alignContent']) => {
      const map: Record<string, Align> = {
        start: Align.FlexStart,
        'flex-start': Align.FlexStart,
        'flex-end': Align.FlexEnd,
        end: Align.FlexEnd,
        center: Align.Center,
        stretch: Align.Stretch,
        'space-between': Align.SpaceBetween,
        'space-around': Align.SpaceAround,
      };
      node.setAlignContent(map[value!] ?? Align.FlexStart);
    },

    alignSelf: (node: Node, value: CssProperties['alignSelf']) => {
      const map: Record<string, Align> = {
        auto: Align.Auto,
        start: Align.FlexStart,
        'flex-start': Align.FlexStart,
        'flex-end': Align.FlexEnd,
        end: Align.FlexEnd,
        center: Align.Center,
        stretch: Align.Stretch,
        baseline: Align.Baseline,
      };
      node.setAlignSelf(map[value!] ?? Align.Auto);
    },

    // Spacing
    margin: (node: Node, value: CssProperties['margin']) => {
      YogaStyleMapper.setEdge(node, 'setMargin', Edge.All, value);
    },

    marginTop: (node: Node, value: CssProperties['marginTop']) => {
      YogaStyleMapper.setEdge(node, 'setMargin', Edge.Top, value);
    },

    marginRight: (node: Node, value: CssProperties['marginRight']) => {
      YogaStyleMapper.setEdge(node, 'setMargin', Edge.Right, value);
    },

    marginBottom: (node: Node, value: CssProperties['marginBottom']) => {
      YogaStyleMapper.setEdge(node, 'setMargin', Edge.Bottom, value);
    },

    marginLeft: (node: Node, value: CssProperties['marginLeft']) => {
      YogaStyleMapper.setEdge(node, 'setMargin', Edge.Left, value);
    },

    padding: (node: Node, value: CssProperties['padding']) => {
      YogaStyleMapper.setEdge(node, 'setPadding', Edge.All, value);
    },

    paddingTop: (node: Node, value: CssProperties['paddingTop']) => {
      YogaStyleMapper.setEdge(node, 'setPadding', Edge.Top, value);
    },

    paddingRight: (node: Node, value: CssProperties['paddingRight']) => {
      YogaStyleMapper.setEdge(node, 'setPadding', Edge.Right, value);
    },

    paddingBottom: (node: Node, value: CssProperties['paddingBottom']) => {
      YogaStyleMapper.setEdge(node, 'setPadding', Edge.Bottom, value);
    },

    paddingLeft: (node: Node, value: CssProperties['paddingLeft']) => {
      YogaStyleMapper.setEdge(node, 'setPadding', Edge.Left, value);
    },

    // Positioning
    position: (node: Node, value: CssProperties['position']) => {
      const map: Record<string, PositionType> = {
        relative: PositionType.Relative,
        absolute: PositionType.Absolute,
      };
      node.setPositionType(map[value!] ?? PositionType.Static);
    },

    top: (node: Node, value: CssProperties['top']) => {
      YogaStyleMapper.setEdge(node, 'setPosition', Edge.Top, value);
    },

    right: (node: Node, value: CssProperties['right']) => {
      YogaStyleMapper.setEdge(node, 'setPosition', Edge.Right, value);
    },

    bottom: (node: Node, value: CssProperties['bottom']) => {
      YogaStyleMapper.setEdge(node, 'setPosition', Edge.Bottom, value);
    },

    left: (node: Node, value: CssProperties['left']) => {
      YogaStyleMapper.setEdge(node, 'setPosition', Edge.Left, value);
    },

    border: (node: Node, value: CssProperties['border'], edge = Edge.All) => {
      node.setBorder(edge, typeof value === 'string' ? parseFloat(value) : value);
    },

    borderTop: (node: Node, value: CssProperties['borderTop']) => {
      this.mappers.border(node, value, Edge.Top);
    },

    borderRight: (node: Node, value: CssProperties['borderRight']) => {
      this.mappers.border(node, value, Edge.Right);
    },

    borderBottom: (node: Node, value: CssProperties['borderBottom']) => {
      this.mappers.border(node, value, Edge.Bottom);
    },

    borderLeft: (node: Node, value: CssProperties['borderLeft']) => {
      this.mappers.border(node, value, Edge.Left);
    },

    // Other
    aspectRatio: (node: Node, value: CssProperties['aspectRatio']) => {
      if (typeof value === 'number') node.setAspectRatio(value);
    },

    overflow: (node: Node, value: CssProperties['overflow']) => {
      const map: Record<string, Overflow> = {
        visible: Overflow.Visible,
        hidden: Overflow.Hidden,
        scroll: Overflow.Scroll,
      };
      node.setOverflow(map[value!] ?? Overflow.Visible);
    },

    boxSizing: (node: Node, value: CssProperties['boxSizing']) => {
      const map: Record<string, BoxSizing> = {
        'border-box': BoxSizing.BorderBox,
        'content-box': BoxSizing.ContentBox,
      };
      node.setBoxSizing(map[value!] ?? BoxSizing.BorderBox);
    },

    gap: (node: Node, value: CssProperties['gap']) => {
      // Для gap используем columnGap и rowGap
      if (typeof value === 'number') {
        node.setGap(Gutter.All, value);
      }
    },
  };

  private static setDimension(node: any, method: string, value: number | string | undefined) {
    if (value === undefined) return;

    if (value === 'auto') {
      node[`${method}Auto`]();
    } else if (typeof value === 'string' && value.endsWith('%')) {
      const percent = parseFloat(value);
      if (!isNaN(percent)) node[`${method}Percent`](percent);
    } else {
      const num = typeof value === 'number' ? value : parseFloat(value);
      if (!isNaN(num)) node[method](num);
    }
  }

  private static setEdge(
    node: any,
    method: string,
    edge: Edge,
    value: number | string | undefined,
  ) {
    if (value === undefined) return;

    if (value === 'auto' && method === 'setMargin') {
      node.setMarginAuto(edge);
    } else if (typeof value === 'string' && value.endsWith('%')) {
      const percent = parseFloat(value);
      if (!isNaN(percent)) node[`${method}Percent`](edge, percent);
    } else {
      const num = typeof value === 'number' ? value : parseFloat(value);
      if (!isNaN(num)) node[method](edge, num);
    }
  }
}
