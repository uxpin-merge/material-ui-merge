import React from "react";
import PropTypes from "prop-types";
import ListSubheaderM from "@material-ui/core/ListSubheader";

function ListSubheader(props) {
  return <ListSubheaderM {...props}>{props.children}</ListSubheaderM>;
}

ListSubheader.propTypes = {
  /**
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
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'inherit']),

  /**
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: PropTypes.bool,

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: PropTypes.bool,

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: PropTypes.bool 
};

export { ListSubheader as default };
