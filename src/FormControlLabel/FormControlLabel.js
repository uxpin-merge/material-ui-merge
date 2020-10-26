import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@material-ui/core/FormControlLabel";

function FormControlLabel(props) {
  return <FormControlLabelM {...props}>{props.children}</FormControlLabelM>;
}

FormControlLabel.propTypes = {
/**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  className: PropTypes.string,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @uxpinignoreprop 
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /*
   * @ignore
   */
  name: PropTypes.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,

  /**
   * @uxpinignoreprop 
   * The value of the component.
   */
  value: PropTypes.string
};

FormControlLabel.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
};

export { FormControlLabel as default };
