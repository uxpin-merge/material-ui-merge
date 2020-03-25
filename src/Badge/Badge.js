import React from "react";
import PropTypes from "prop-types";
import BadgeM from "@material-ui/core/Badge";

function Badge(props) {
  return <BadgeM {...props}>{props.children}</BadgeM>;
}

Badge.propTypes = {
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "error"]),

  /**
   * If `true`, the badge will be invisible.
   */
  invisible: PropTypes.bool
};

export { Badge as default };
