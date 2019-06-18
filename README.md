# Material UI + UXPin Merge
Integration of [Material UI](https://material-ui.com/) with UXPin Merge Technology.

![alt text](https://github.com/uxpin-merge/material-ui-merge/blob/master/img/header.png "RMWC in UXPin")

## About Material UI

Material UI is an implementation of Google's Material Design in React.js, created and maintained by Olivier Tassinari.
To support Material UI please consider donation: https://www.patreon.com/oliviertassinari 

## About UXPin Merge

Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. 
The imported components are 100% identical to components used by developers during the development process. 
It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users. 

[UXPin](http://uxpin.com) is a leading code–based design platform.

## How to use Merge integration with RMWC?

Merge is currently only available to selected beta users.

1. Fork this repository and clone it to your computer.
2. Install dependencies with `npm install`
3. Log in to your UXPin beta account (approved for alpha and beta tests by UXPin Inc.)
4. Start Merge dev environment with `npm start`

If you wish to push RMWC components to your UXPin account or set-up a continues integration with a CI server - contact UXPin on Merge alpha Slack community.

## Supported components

| Component     | Material UI url      | Status|
| ------------- |:-------------:| :-----|
| AppBar        | [AppBar](https://material-ui.com/demos/app-bar/) | ✅ Full Support |
| Autocomplete  | [Autocomplete](https://material-ui.com/demos/autocomplete/)      | Not supported yet|
| Avatar | [Avatar](https://material-ui.com/demos/avatars/)     | ✅ Full Support |
| Badge | [Badge](https://material-ui.com/demos/badges/)     | ✅ Full Support |
| BottomNavigation | [BottomNavigation](https://material-ui.com/demos/bottom-navigation/) | ✅ Full Support |
| Button | [Button](https://material-ui.com/demos/buttons/) | ✅ Full Support |
| Card | [Card](https://material-ui.com/demos/cards/) | ✅ Full Support |
| Chip | [Chip](https://material-ui.com/demos/chips/) | ✅ Full Support |
| Dialog | [Dialog](https://material-ui.com/demos/dialogs/) | 🔻 Not Supported. Issues with absolutely positioned elements.|
| Divider | [List Divider](https://material-ui.com/demos/dividers/) | ✅ Full Support |
| Drawer | [Drawer](https://material-ui.com/demos/drawers/) | 🔻 Not Supported. Unknown issue. |
| ExpansionPanel | [https://material-ui.com/demos/expansion-panels/) | 🔻 Not Supported. Unknown issue. |
| GridList | [GridList](https://material-ui.com/demos/grid-list/) | ✅ Full Support |
| Icon | – | ✅ Full Support |
| List | [List](https://material-ui.com/demos/lists/) | ✅ Full Support |
| Menu | [Menu](https://material-ui.com/demos/menus/) | 🔻 Not Supported. Issues with absolutely positioned elements. |
| Paper | [Paper](https://material-ui.com/demos/paper/) | ✅ Full Support |
| DatePicker | [Pickers](https://material-ui.com/demos/pickers/) | ✅ Full Support |
| TimePicker | [Pickers](https://material-ui.com/demos/pickers/) | ✅ Full Support |
| CircularProgress | [Progress](https://material-ui.com/demos/progress/) | ✅ Full Support |
| LinearProgress | [Progress](https://material-ui.com/demos/progress/)| ✅ Full Support |
| Radio | [Selection Controls](https://material-ui.com/demos/selection-controls/) | ✅ Full Support |
| RadioGroup | [Selection Controls](https://material-ui.com/demos/selection-controls/) | ✅ Full Support  |
| Checkbox | [Selection Controls](https://material-ui.com/demos/selection-controls/) | ✅ Full Support |
| Switches | [Selection Controls](https://material-ui.com/demos/selection-controls/)  | ✅ Full Support |
| FormGroup | [Selection Controls](https://material-ui.com/demos/selection-controls/) | ✅ Full Support |
| FormLabel | [Selection Controls](https://material-ui.com/demos/selection-controls/) | ✅ Full Support |
| Select | [Select](https://material-ui.com/demos/selects/) | ✅ Full Support |
| Snackbar | [Snackbar](https://material-ui.com/demos/steppers/) | 🔻 Not supported yet |
| Stepper | [Stepper](https://material-ui.com/demos/snackbars/) | 🔻 Not Supported yet |
| Table | [Table](https://material-ui.com/demos/tables/) | 🔻 Not Supported yet |
| Tabs | [Tabs](https://material-ui.com/demos/tabs/) | ✅ Full Support |
| TextField | [TextFields](https://material-ui.com/demos/text-fields/) | ✅ Full Support |

## Theming

To change theme, modify `theme` constant in the [`./src/Wrapper/UXPinWrapper.js`](https://github.com/uxpin-merge/material-ui-merge/blob/master/src/Wrapper/UXPinWrapper.js) file. You can modify any parameters described in 
the [Material UI documentation](https://material-ui.com/customization/themes/#theme-provider)

## CI Server Integration (available only for *beta users*)

The recommended approach to integrating React.js components with UXPin is via Continuous Integration server (Circle CI, Travis...). 
This approach provides an opportunity to establish a real single source of truth for design and development. 

After the integration with a CI server every commit to master can (if this is how your CI is configured) automatically update library in UXPin. 

This repository consits of [an example of integration with Circle CI](https://github.com/uxpin-merge/material-ui-merge/blob/master/.circleci/config.yml). 
If you wish to reuse it follow these steps:
1. Make sure that you forked this repository.
2. Go to https://circleci.com and sign-up for an account with your Github credentials.
3. Start a new project and track your fork of this repository.
4. Go into your [UXPin](http://uxpin.com) account, enter UXPin editor (in any project).
5. While inside of UXPin editor open Design Systems Libraries panel and create a new library. Copy the library token (keep it secure it provides access to your library!)

![alt text](https://github.com/uxpin-merge/material-ui-merge/blob/master/img/merge_ci.gif "UXPin Design System Library")

If you're not seeing the screen above – contact your account manager. You're not in Merge Beta group yet.

6. Go into settings of your project in Circle CI. Enter section `Environment Variables` and click on `Add new variable`.
7. Name the new variable `UXPIN_AUTH_TOKEN` and pass your token copied from the UXPin library (#5) as its value.

That's it! The next change in the master branch of your fork will automatically trigger Circle CI and send the newest version of your components to UXPin.

Integration with CI server leads to a powerful workflow, with that however comes couple of dangers, so please be aware of them!
* ⚠️ Don't share your UXPin authorization token with anyone. It leads straight to your design system library in UXPin. Keep the token safe in the CI app!
* ⚠️ Don't keep your UXPin authorization token in any file checked into your git repository.
* ⚠️ Treat contributing to Master branch just like deploying production code. *Any* change will be automatically reflected in the UXPin library and projects. 
If you want to experiment with components – start a new branch and use Merge dev environment – experiment mode (in this repository launched via `npm run start`)

## Examples

![alt text](https://github.com/uxpin-merge/material-ui-merge/blob/master/img/material_ui.gif "Material UI in UXPin")


