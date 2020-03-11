import React from "react";
import PropTypes from "prop-types";
import FormGroupM from "@material-ui/core/FormGroup";

function FormGroup(props) {
  return <FormGroupM {...props}>{props.children}</FormGroupM>;
}

FormGroup.propTypes = {
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
  classes: PropTypes.object.isRequired,

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool
};

export { FormGroup as default };
