import React from "react";
import PropTypes from "prop-types";
import CardContentM from "@material-ui/core/CardContent";

function CardContent(props) {
  return (
    <CardContentM {...props}>
      {props.children}
    </CardContentM>
  );
}

CardContent.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
};

export { CardContent as default };
