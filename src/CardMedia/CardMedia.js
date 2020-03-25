import React from "react";
import PropTypes from "prop-types";
import CardMediaM from "@material-ui/core/CardMedia";

function CardMedia(props) {
  return <CardMediaM {...props} />;
}

CardMedia.propTypes = {
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /** @uxpinignoreprop  */
  component: PropTypes.string,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,
  style: PropTypes.object
};

export { CardMedia as default };
