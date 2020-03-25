import React from "react";
import PropTypes from "prop-types";
import ListItemSecondaryActionM from "@material-ui/core/ListItemSecondaryAction";

function ListItemSecondaryAction(props) {
  return <ListItemSecondaryActionM {...props}>{props.children}</ListItemSecondaryActionM>;
}

ListItemSecondaryAction.propTypes = {
  /**
   * @uxpinignoreprop 
   * The content of the component, normally an `IconButton` or selection control.
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

export { ListItemSecondaryAction as default };
