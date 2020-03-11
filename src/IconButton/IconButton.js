import React from "react";
import PropTypes from "prop-types";
import IconButtonM from "@material-ui/core/IconButton";

function IconButton(props) {
  return <IconButtonM {...props}>{props.children}</IconButtonM>;
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  /**
   * The icon element.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool
};

export { IconButton as default };
