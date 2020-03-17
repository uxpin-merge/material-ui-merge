import React from "react";
import PropTypes from "prop-types";
import IconM from "@material-ui/core/Icon";

function Icon(props) {
  return <IconM {...props}>{props.children}</IconM>;
}

Icon.propTypes = {
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /** @uxpinignoreprop  */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "action",
    "error",
    "disabled"
  ]),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(["inherit", "default"])
};

export { Icon as default };
