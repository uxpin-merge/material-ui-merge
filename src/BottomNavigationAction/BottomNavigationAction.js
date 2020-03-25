import React from "react";
import PropTypes from "prop-types";
import BottomNavigationActionM from "@material-ui/core/BottomNavigationAction";

function BottomNavigationAction(props) {
  return <BottomNavigationActionM {...props} />;
}

BottomNavigationAction.propTypes = {
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The icon element.
   */
  icon: PropTypes.node,
  /**
   * The label element.
   */
  label: PropTypes.node,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   */
  showLabel: PropTypes.bool,
  value: PropTypes.string
};

export { BottomNavigationAction as default };
