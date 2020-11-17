module.exports = {
  components: {
    categories: [
      {
        name: "Layout",
        include: [
          "src/Grid/Grid.js",
          "src/GridList/GridList.js",
          "src/GridListTile/GridListTile.js",
          "src/GridListTileBar/GridListTileBar.js",
          "src/MuiTheme/MuiTheme.js",
        ]
      },
      {
        name: "General",
        include: [
          "src/Icon/Icon.js",
          "src/Typography/Typography.js"
        ]
      },
      {
        name: "Actions",
        include: [
          "src/Button/Button.js",
          "src/IconButton/IconButton.js",
          "src/Fab/Fab.js",
          "src/Link/Link.js"
        ]
      },
      {
        name: "Navigation",
        include: [
          "src/AppBar/AppBar.js",
          "src/Toolbar/Toolbar.js",
          "src/BottomNavigation/BottomNavigation.js",
          "src/BottomNavigationAction/BottomNavigationAction.js",
          "src/Tab/Tab.js",
          "src/Tabs/Tabs.js",
          "src/TabsContainer/TabsContainer.js",
          "src/TabsContainer/TabContent/TabContent.js",
        ]
      },
      {
        name: "Card",
        include: [
          "src/Card/Card.js",
          "src/CardActions/CardActions.js",
          "src/CardContent/CardContent.js",
          "src/CardHeader/CardHeader.js",
          "src/CardMedia/CardMedia.js"
        ]
      },
      {
        name: "Form",
        include: [
          "src/Checkbox/Checkbox.js",
          "src/Radio/Radio.js",
          "src/Switch/Switch.js",
          "src/TextField/TextField.js",
          "src/Input/Input.js",
          "src/Select/Select.js",
          "src/RadioGroup/RadioGroup.js",
          "src/MenuItem/MenuItem.js",
          "src/MenuList/MenuList.js",
          "src/OutlinedInput/OutlinedInput.js",
          "src/FilledInput/FilledInput.js",
          "src/InputLabel/InputLabel.js",
          "src/FormControl/FormControl.js",
          "src/FormHelperText/FormHelperText.js",
          "src/FormGroup/FormGroup.js",
          "src/FormControlLabel/FormControlLabel.js",
          "src/FormLabel/FormLabel.js",
          "src/RadioGroup/RadioGroup.js"
        ]
      },
      {
        name: "Content",
        include: [
          "src/Paper/Paper.js",
          "src/Collapse/Collapse.js",
          "src/Avatar/Avatar.js",
          "src/Badge/Badge.js",
          "src/Backdrop/Backdrop.js",
          "src/Chip/Chip.js"
        ]
      },
      {
        name: "List",
        include: [
          "src/List/List.js",
          "src/ListItem/ListItem.js",
          "src/ListItemAvatar/ListItemAvatar.js",
          "src/ListItemIcon/ListItemIcon.js",
          "src/ListItemSecondaryAction/ListItemSecondaryAction.js",
          "src/ListItemText/ListItemText.js",
          "src/ListSubheader/ListSubheader.js"
        ]
      },
      {
        name: "Progress",
        include: [
          "src/CircularProgress/CircularProgress.js",
          "src/LinearProgress/LinearProgress.js"
        ]
      },
      {
        name: "HTML Wrappers and Spacing",
        include: [
          "src/Image/Image.js",
          "src/CssBaseline/CssBaseline.js"
        ]
      }
    ],
    wrapper: 'src/Wrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: "Material Design UI"
};
