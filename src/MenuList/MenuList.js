import React from "react";
import PropTypes from "prop-types";
import MenuListM from "@material-ui/core/MenuList";

function MenuList(props) {
  return <MenuListM {...props}>{props.children}</MenuListM>;
}

MenuList.propTypes = {
  /**
   * /**
   * @uxpinignoreprop 
   * MenuList contents, normally `MenuListItem`s.
   */
  children: PropTypes.node,

  /**
   * /**
   * @uxpinignoreprop 
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the MenuList items will not wrap focus.
   */
  disableListWrap: PropTypes.bool,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func
}

export { MenuList as default };
