import { Children, Widget } from "../types";

/**
 * Adds `child` as the last child to `box`.
 * @param child the `GtkWidget` to append
 */
export type WidgetAppendFunction = (child: Widget) => void

export type WidgetWithChildren = Widget & { append: WidgetAppendFunction }

export const isWidgetWithChildren = (w: Widget): w is WidgetWithChildren => {
  if (!Object.hasOwn(w, "append")) {
    return false
  }

  const wAppend = w as typeof w & { append: unknown }
  if (typeof wAppend.append !== 'function') {
    return false;
  }

  return true
}

export const addChildren = (widget: WidgetWithChildren, children?: Children | null) => {
  if (children == null) {
    return;
  }

  for (const child of children) {
    if (child == null) {
      continue;
    }
    widget.append(child)
  };
}