import React from "react";
import PropTypes from "prop-types";
import GridM from "@material-ui/core/Grid";

function Grid(props) {
  const space = Number(props.spacing);
  return <GridM {...props} spacing={space}>{props.children}</GridM>;
}

Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf([
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline"
  ]),

  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @uxpinignoreprop
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly"
  ]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
   */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
   */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.oneOf(["0", "8", "16", "24", "32", "40"]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `columns (xl)` breakpoint and wider screens.  1-12, true, false, or auto.
   * @uxpinpropname  columns (xl)
   */
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority. 1-12, true, false, or auto.
   * @uxpinpropname  columns (xs)
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: PropTypes.bool
};

export { Grid as default };
