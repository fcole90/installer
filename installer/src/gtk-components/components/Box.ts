import { addChildren } from "./componentsUtils";
import { FlexBoxAlignItemsProp, FlexBoxDirectionProp, FlexBoxJustifyContentProp, MarginProps } from "../style/styleTypes";
import { convertDirectionProps, convertMarginProps, convertJustifyProp, convertAlignItemsProp } from "../style/styleUtils";
import { Children, FC } from "../types";
import Gtk from 'gi://Gtk?version=4.0';

interface Props extends MarginProps {
  direction: FlexBoxDirectionProp,
  justifyContent?: FlexBoxJustifyContentProp,
  alignItems?: FlexBoxAlignItemsProp,
  spacing?: number,
  children?: Children,
}

const Box: FC<Props> = (props) => {
  const box = new Gtk.Box({
    ...convertDirectionProps(props),
    ...convertMarginProps(props),
    ...convertJustifyProp(props),
    ...convertAlignItemsProp(props),
  });
  addChildren(box, props.children)
  return box;
}

export type BoxProps = Props;
export default Box;
