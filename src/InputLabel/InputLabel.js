import React from "react";
import PropTypes from "prop-types";
import InputLabelM from "@material-ui/core/InputLabel";

function InputLabel(props) {
  return <InputLabelM {...props}>{props.children}</InputLabelM>;
}

InputLabel.propTypes = {
  /**
   * @uxpinignoreprop 
   * The contents of the `InputLabel`.
   */
  children: PropTypes.node,

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
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: PropTypes.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: PropTypes.bool,

  /**
   * @uxpinignoreprop 
   * `classes` property applied to the [`FormLabel`](/api/form-label/) element.
   */
  FormLabelClasses: PropTypes.object,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(["dense"]),

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
};

export { InputLabel as default };
