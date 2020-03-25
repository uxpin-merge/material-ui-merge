import React from "react";
import PropTypes from "prop-types";
import LinkM from "@material-ui/core/Link";

function Link(props) {
  /** Display inline-block fixes problems in positioning on canvas in UXPin */
  return <LinkM {...props} style={{"display": "inline-block"}}>{props.children}</LinkM>;
}

Link.propTypes = {
  onClick: PropTypes.func,
  /**
   *  Controls whether the link is inline or not. When `block` is true the link is not inline
   *  when `block` is false it is.
   */
  block: PropTypes.bool,

  /**
   * The content of the link.
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
   * The color of the link.
   */
  color: PropTypes.oneOf(['error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),

  /**
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * The target of the link. You can read about this property on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes)
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

  /**
   * `classes` property applied to the [`Typography`](/api/typography/) element.
   */
  TypographyClasses: PropTypes.object,

  /**
   *  Controls when the link should have an underline.
   */
  underline: PropTypes.oneOf(['none', 'hover', 'always']),

  /**
   * @uxpinignoreprop 
   * Applies the theme typography styles.
   */
  variant: PropTypes.string 
}

export { Link as default };
