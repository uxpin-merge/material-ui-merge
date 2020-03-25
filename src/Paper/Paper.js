import React from "react";
import PropTypes from "prop-types";
import PaperM from "@material-ui/core/Paper";

function Paper(props) {
  return <PaperM {...props} style={props.style}>{props.children}</PaperM>;
}

Paper.propTypes = {
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
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   * @ignore
   */
  className: PropTypes.string,

  /**
   * @uxpinignoreprop
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: PropTypes.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,

  /**
   * Custom Style Object
   */
  style: PropTypes.object
};

export { Paper as default };
