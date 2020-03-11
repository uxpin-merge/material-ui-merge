import React from "react";
import PropTypes from "prop-types";
import MenuItemM from "@material-ui/core/MenuItem";

function MenuItem(props) {
  return <MenuItemM {...props}>{props.children}</MenuItemM>;
}

MenuItem.propTypes = {
  /**
   * @uxpinignoreprop 
   * Menu item contents.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  role: PropTypes.string,

  selected: PropTypes.bool,
  /**
   * @uxpinignoreprop 
   */
  value: PropTypes.string,
  onClick: PropTypes.func
};

export { MenuItem as default };
