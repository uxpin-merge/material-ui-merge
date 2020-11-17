import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME_TYPES = {
  dark: 'dark',
  light: 'light',
};

const THEME_PALETTES = {
  [THEME_TYPES.light]: {},
  [THEME_TYPES.dark]: {
    type: 'dark',
    background: {
      default: '#05060F',
      paper: '#14151d',
      action: '#22232c',
    },
    primary: {
      main: '#0068DD',
      dark: '#004488',
    },
    divider: '#36373e', //'#636e7c',
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b5',
      disabled: '#5d5f65',
      hint: '#5d5f65',
      header: '#7F7F84',
    },
    action: {
      disabled: '#5d5f65',
      selected: 'rgba(0, 68, 136, 0.1)',
      hover: 'rgba(34, 35, 44, 1)',
    },
  },
};
export const getThemes = () =>
  Object.values(THEME_TYPES).reduce(
    (themes, item) => (item === THEME_TYPES.light ? [item, ...themes] : themes.concat(item)),
    [],
  );

const theme = (themeType = THEME_TYPES.light) =>
  createMuiTheme({
    palette: {
      success: {
        main: '#4bbd3b',
      },
      info: {
        main: '#139df2',
      },
      error: {
        main: '#e53935',
      },
      warning: {
        main: '#ff6200',
      },
      neutral: {
        main: '#36373e',
      },
      caution: {
        main: '#ffb300',
      },
      state: {
        active: '#e5f0ff',
        highlight: '#effad6',
      },
      ...THEME_PALETTES[themeType],
    },
    typography: {
      fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      h1: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: '40px',
      },
      h2: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: '32px',
      },
      h3: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: '24px',
      },
      h4: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: '24px',
      },
      h5: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: '24px',
      },
      h6: {
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: '20px',
      },
      body1: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '24px',
      },
      body2: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '20px',
      },
      subtitle1: {
        fontSize: 14,
        lineHeight: '24px',
      },
      subtitle2: {
        fontSize: 12,
        lineHeight: '20px',
      },
      overline: {
        fontSize: 10,
        fontWeight: 500,
        lineHeight: '20px',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        },
        sizeLarge: {
          padding: '8px 16px',
          lineHeight: '24px',
        },
      },
    },
  });

function MuiTheme(props) {
  console.log("theme", props.themeName)
  return <MuiThemeProvider theme={theme(props.themeName)}>{props.children}</MuiThemeProvider>;
}

MuiTheme.propTypes = {
  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * The name of the theme to use. All children will use this theme.
   */
  themeName: PropTypes.oneOf(['light', 'dark'])
}

export { MuiTheme as default };
