import Gtk from 'gi://Gtk?version=4.0';
import { FlexBoxAlignItemsProp, FlexBoxDirectionProp, FlexBoxJustifyContentProp } from './styleTypes';
import { assertNever } from '../utils/assertNever';

interface ConvertAlignItemsPropsProps {
  direction?: FlexBoxDirectionProp;
  justifyContent?: FlexBoxJustifyContentProp;
}

type ConvertedAlignItemsProps = {
  halign?: Gtk.Align,
} | {
  valign?: Gtk.Align,
}

export const convertAlignItemsProp = (props: ConvertAlignItemsPropsProps): ConvertedAlignItemsProps => {

  if (props.direction == null || props.justifyContent == null) {
    return {}
  }

  const alignProp = props.direction === 'column' ? 'halign' : 'valign';

  switch (props.justifyContent) {
    case "start":
      return { [alignProp]: Gtk.Align.START }

    case "center":
      return { [alignProp]: Gtk.Align.CENTER }

    case "end":
      return { [alignProp]: Gtk.Align.END };

    case "stretch":
      return { [alignProp]: Gtk.Align.FILL }

    default:
      assertNever(props.justifyContent)
  }

  return {}
}


interface ConvertJustifyPropsProps {
  direction?: FlexBoxDirectionProp;
  justifyContent?: FlexBoxJustifyContentProp;
}

type ConvertedJustifyProps = {
  halign?: Gtk.Align,
} | {
  valign?: Gtk.Align,
}

export const convertJustifyProp = (props: ConvertJustifyPropsProps): ConvertedJustifyProps => {

  if (props.direction == null || props.justifyContent == null) {
    return {}
  }

  const alignProp = props.direction === 'column' ? 'halign' : 'valign';

  switch (props.justifyContent) {
    case "start":
      return { [alignProp]: Gtk.Align.START }

    case "center":
      return { [alignProp]: Gtk.Align.CENTER }

    case "end":
      return { [alignProp]: Gtk.Align.END };

    case "stretch":
      return { [alignProp]: Gtk.Align.FILL }

    default:
      assertNever(props.justifyContent)
  }

  return {}
}

interface ConvertDirectionPropsProps {
  direction?: FlexBoxDirectionProp;
}

interface ConvertedDirectionProps {
  orientation?: Gtk.Orientation;
}

export const convertDirectionProps = (props: ConvertDirectionPropsProps): ConvertedDirectionProps => {
  switch (props.direction) {
    case 'row':
      return { orientation: Gtk.Orientation.HORIZONTAL };
    case 'column':
      return { orientation: Gtk.Orientation.VERTICAL };
    default:
      return {};
  }
}

interface ConvertMarginPropsProps {
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
}

interface ConvertedMarginProps {
  marginBottom?: number,
  marginEnd?: number,
  marginStart?: number,
  marginTop?: number,
}

export const convertMarginProps = (props: ConvertMarginPropsProps): ConvertedMarginProps => {
  const converted: ConvertedMarginProps = {};

  if (props.margin) {
    converted.marginTop = props.margin;
    converted.marginEnd = props.margin;
    converted.marginBottom = props.margin;
    converted.marginStart = props.margin;
  }

  if (props.marginTop) {
    converted.marginTop = props.marginTop;
  }
  if (props.marginRight) {
    // Might need revision to consider RTL and LTR
    converted.marginEnd = props.marginRight;
  }
  if (props.marginBottom) {
    converted.marginBottom = props.marginBottom;
  }
  if (props.marginLeft) {
    // Might need revision to consider RTL and LTR
    converted.marginStart = props.marginLeft;
  }

  return converted;
}