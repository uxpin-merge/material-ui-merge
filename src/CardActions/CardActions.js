import React from "react";
import PropTypes from "prop-types";
import CardActionsM from "@material-ui/core/CardActions";

function CardActions(props) {
  return (
    <CardActionsM {...props}>
      {props.children}
    </CardActionsM>
  );
}

CardActions.propTypes = {
  /**
   * @uxpinignoreprop 
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool
};

export { CardActions as default };
