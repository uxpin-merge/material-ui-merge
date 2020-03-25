import React from "react";
import PropTypes from "prop-types";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import AvatarM from "@material-ui/core/Avatar";

function colorSelector(shade, hue) {
  if(hue !== undefined) {
    switch (shade) {
      case "white":
        return "white";
      case "red":
        return red[hue];
      case "pink":
        return pink[hue];
      case "purple":
        return purple[hue];
      case "deepPurple":
        return deepPurple[hue];
      case "indigo":
        return indigo[hue];
      case "blue":
        return blue[hue];
      case "lightBlue":
        return lightBlue[hue];
      case "cyan":
        return cyan[hue];
      case "teal":
        return teal[hue];
      case "green":
        return green[hue];
      case "lightGreen":
        return lightGreen[hue];
      case "lime":
        return lime[hue];
      case "yellow":
        return yellow[hue];
      case "amber":
        return amber[hue];
      case "orange":
        return orange[hue];
      case "deepOrange":
        return deepOrange[hue];
      case "brown":
        return brown[hue];
      case "grey":
        return grey[hue];
      case "blueGrey":
        return blueGrey[hue];
      default:
        return red;
        break;
    }
  }
  else {
    return shade;
  }
  
}

function Avatar(props) {
  return (
    <AvatarM
      {...props}
      style={{
        backgroundColor: colorSelector(
          props.backgroundShade,
          props.backgroundHue
        ),
        color: colorSelector(props.contentShade, props.contentHue)
      }}
    >
      {props.children}
    </AvatarM>
  );
}

Avatar.propTypes = {
  /**
   * Color of the background of the avatar. Visible unless there's an image inside of the circle.
   */
  backgroundShade: PropTypes.oneOf([
    "white",
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange",
    "brown",
    "grey",
    "blueGrey"
  ]),
  /**
   * Hue of the background of the avatar. Visible unless there's an image inside of the circle.
   */
  backgroundHue: PropTypes.oneOf([
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "A100",
    "A200",
    "A400",
    "A700"
  ]),
  /**
   * Color of the content of the avatar. Visible unless there's an image inside of the circle.
   */
  contentShade: PropTypes.oneOf([
    "white",
    "red",
    "pink",
    "purple",
    "deepPurple",
    "indigo",
    "blue",
    "lightBlue",
    "cyan",
    "teal",
    "green",
    "lightGreen",
    "lime",
    "yellow",
    "amber",
    "orange",
    "deepOrange",
    "brown",
    "grey",
    "blueGrey"
  ]),
  /**
   * Hue of the content of the avatar. Visible unless there's an image inside of the circle.
   */
  contentHue: PropTypes.oneOf([
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "A100",
    "A200",
    "A400",
    "A700"
  ]),
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,

  /**
   * @uxpinignoreprop 
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Attributes applied to the `img` element if the component
   * is used to display an image.
   */
  imgProps: PropTypes.object,

  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,

  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,

  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: PropTypes.string
};

export { Avatar as default };
