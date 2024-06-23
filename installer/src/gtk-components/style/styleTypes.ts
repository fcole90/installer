export interface MarginProps {
  margin?: number,
  marginTop?: number,
  marginRight?: number,
  marginBottom?: number,
  marginLeft?: number
}

const flexBoxDirectionProps = {
  row: "row",
  column: "column"
} as const;
export type FlexBoxDirectionProp = keyof typeof flexBoxDirectionProps;

const flexBoxDistributions = {
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch",
} as const;

const flexBoxJustifyContentProps = {
  ...flexBoxDistributions
} as const;
export type FlexBoxJustifyContentProp = keyof typeof flexBoxJustifyContentProps;

const flexBoxAlignItemsProps = {
  baseline: "baseline",
  ...flexBoxDistributions
} as const;
export type FlexBoxAlignItemsProp = keyof typeof flexBoxAlignItemsProps;
