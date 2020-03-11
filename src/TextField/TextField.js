import React from "react";
import PropTypes from "prop-types";
import TextFieldM from "@material-ui/core/TextField";

function TextField(props) {
  return <TextFieldM {...props} />;
}

TextField.propTypes = {
  /**
   * @uxpinignoreprop
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: PropTypes.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /** @uxpinignoreprop */
  children: PropTypes.node,

  /** @uxpinignoreprop */
  className: PropTypes.string,

  /**
   * The default value of the `Input` element.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: PropTypes.bool,

  /** @uxpinignoreprop */
  FormHelperTextProps: PropTypes.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The helper text content.
   */
  helperText: PropTypes.node,

  /**
   * @uxpinignoreprop
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,

  /** @uxpinignoreprop */
  InputLabelProps: PropTypes.object,

  /**
   * @uxpinignoreprop
   * Properties applied to the `Input` element.
   */
  InputProps: PropTypes.object,

  /**
   * @uxpinignoreprop
   * Attributes applied to the native `input` element.
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
   * The label content.
   */
  label: PropTypes.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: PropTypes.oneOf(["none", "dense", "normal"]),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,

  onBlur: PropTypes.func,

  /**
   * Callback fired when the value is changed.
   */
  onChange: PropTypes.func,

  onFocus: PropTypes.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * If `true`, the label is displayed as required and the input will be required.
   */
  required: PropTypes.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * @uxpinignoreprop
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: PropTypes.bool,

  /** @uxpinignoreprop */
  SelectProps: PropTypes.object,

  /**
   * @uxpinignoreprop
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: PropTypes.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    )
  ]),

  children: PropTypes.node,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
};

export { TextField as default };
