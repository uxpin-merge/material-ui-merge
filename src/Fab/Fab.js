import React from "react";
import PropTypes from "prop-types";
import FabM from "@material-ui/core/Fab";

function Fab(props) {
  return <FabM {...props}>{props.children}{props.label}</FabM>;
}

Fab.propTypes = {
  /**
   * OnClick event
   */
  onClick: PropTypes.func,
  /**
   * @uxpinignoreprop 
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * Label of the button.
   */
  label: PropTypes.string,
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * @uxpinignoreprop 
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  type: PropTypes.string,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['round', 'extended'])  
};

export { Fab as default };
