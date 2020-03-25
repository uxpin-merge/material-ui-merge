import React from "react";
import PropTypes from "prop-types";
import DrawerM from "@material-ui/core/Drawer";

function Drawer(props) {
  return <DrawerM {...props}>{props.children}</DrawerM>;
}

Drawer.propTypes = {
   /**
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * @uxpinignoreprop 
   * The contents of the drawer.
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
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,

  /**
   * Properties applied to the [`Modal`](/api/modal/) element.
   */
  ModalProps: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * If `true`, the drawer is open.
   */
  open: PropTypes.bool,

  /**
   * Properties applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: PropTypes.object,

  /**
   * Properties applied to the [`Slide`](/api/slide/) element.
   */
  SlideProps: PropTypes.object,

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  theme: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
};

export { Drawer as default };
