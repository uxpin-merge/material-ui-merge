import React from "react";
import PropTypes from "prop-types";
import AppBarM from "@material-ui/core/AppBar";

function AppBar(props) {
  return (
    <AppBarM {...props} style={props.style}>
      {props.children}
    </AppBarM>
  );
}

AppBar.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop 
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   * @uxpinignoreprop 
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "default"
  ]),

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: PropTypes.oneOf([
    "fixed",
    "absolute",
    "sticky",
    "static",
    "relative"
  ]),
  /**
   * custom style object
   */
  style: PropTypes.object
};

export { AppBar as default };
