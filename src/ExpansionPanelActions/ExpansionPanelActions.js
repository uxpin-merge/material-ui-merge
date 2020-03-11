import React from "react";
import PropTypes from "prop-types";
import ExpansionPanelActionsM from "@material-ui/core/ExpansionPanelActions";

function ExpansionPanelActions(props) {
  return <ExpansionPanelActionsM {...props}>{props.children}</ExpansionPanelActionsM>;
}

ExpansionPanelActions.propTypes = {
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
  className: PropTypes.string
};

export { ExpansionPanelActions as default };
