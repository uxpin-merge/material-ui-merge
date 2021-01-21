import React from "react";
import PropTypes from "prop-types";
import SwitchM from "@material-ui/core/Switch";

function Switch(props) {
  return <SwitchM {...props} />;
}

Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["primary", "secondary", "default"]),

  defaultChecked: PropTypes.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * @uxpinignoreprop
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * @uxpinignoreprop
   * Attributes applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * @uxpinignoreprop
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),

  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * @uxpinignoreprop
   * The input component property `type`.
   */
  type: PropTypes.string,

  /**
   * @uxpinignoreprop
   * The value of the component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ])
};

Switch.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
  onChange: () => undefined
};

export { Switch as default };
