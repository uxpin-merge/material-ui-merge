import * as React from "react";
import Drawer from "../Drawer";
import List from "../../List/List";
import ListItem from "../../ListItem/ListItem";
import ListItemText from "../../ListItemText/ListItemText";
import ListItemIcon from "../../ListItemIcon/ListItemIcon"

export default (
      <Drawer
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>inbox</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>inbox</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
);
