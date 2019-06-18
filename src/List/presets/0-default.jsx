import * as React from "react";
import List from "../List";
import ListSubheader from "../../ListSubheader/ListSubheader";
import ListItem from "../../ListItem/ListItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemText from "../../ListItemText/ListItemText";
import ListItemSecondaryAction from "../../ListItemSecondaryAction/ListItemSecondaryAction";
import Switch from "../../Switch/Switch";
import Icon from "../../Icon/Icon";

export default (
  <List subheader={<ListSubheader uxpId="1.3">Settings</ListSubheader>} uxpId="1">
    <ListItem uxpId="1.1">
      <ListItemIcon uxpId="1.1.1">
        <Icon edge uxpId="1.1.1.1">wifi</Icon>
      </ListItemIcon>
      <ListItemText uxpId="1.1.2" primary="Wi-Fi" />
      <ListItemSecondaryAction uxpId="1.1.3">
        <Switch uxpId="1.1.3.1" />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem uxpId="1.2">
      <ListItemIcon uxpId="1.2.1">
        <Icon edge uxpId="1.2.1.1">bluetooth</Icon>
      </ListItemIcon>
      <ListItemText uxpId="1.2.2" primary="Bluetooth" />
      <ListItemSecondaryAction uxpId="1.2.3">
        <Switch uxpId="1.2.3.1" />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);
