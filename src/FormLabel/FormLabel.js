import React from "react";
import PropTypes from "prop-types";
import FormLabelM from "@material-ui/core/FormLabel";

function FormLabel(props) {
  return <FormLabelM {...props}>{props.children}</FormLabelM>;
}

FormLabel.propTypes = {
  /**
   * The content of the component.
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
   * 
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes.bool,

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool
};

export { FormLabel as default };
