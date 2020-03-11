import React from "react";
import PropTypes from "prop-types";
import ListItemIconM from "@material-ui/core/ListItemIcon";

function ListItemIcon(props) {
  return <ListItemIconM {...props}>{props.children}</ListItemIconM>;
}

ListItemIcon.propTypes = {
  /**
   * @uxpinignoreprop 
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@material-ui/icons` SVG icon element.
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

export { ListItemIcon as default };
