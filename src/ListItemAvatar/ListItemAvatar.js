import React from "react";
import PropTypes from "prop-types";
import ListItemAvatarM from "@material-ui/core/ListItemAvatar";

function ListItemAvatar(props) {
  return <ListItemAvatarM {...props} />;
}

ListItemAvatar.propTypes = {
  /**
   * @uxpinignoreprop 
   * The content of the component – normally `Avatar`.
   */
  children: PropTypes.element,

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

export { ListItemAvatar as default };
