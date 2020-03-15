import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import StarBorder from "@material-ui/icons/StarBorder";

import { CategoryContext } from "../store/Contexts";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background:'#ff00ff33'
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = (i) => {
    setOpen(!open);
  };

    const contexts = useContext(CategoryContext);
    const categories = contexts.categories;

    const handleDelete = id => {
      contexts.rmCategory(id);
    };

    const addNewHandle = () => {
      contexts.addCategory();
      // alert('Add New')
  };
  
  console.log(categories)

  return (
    <div>
      {
        categories.map(cat => {
          return (
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {cat.label}
              </ListSubheader>
            }
              className={classes.root} >
              
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <Avatar src="a" alt="a" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
              
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        )
      })}
      
    </div>
  );
}
