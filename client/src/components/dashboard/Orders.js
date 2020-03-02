import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Paper, ListItem, Avatar, ListItemIcon, ListItemText, Collapse, Typography, Toolbar } from '@material-ui/core';
import { ExpandLess, ExpandMore, MoreVert  } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background: 'wheat'
  },
}));

const CustomList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      <Paper>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <MoreVert onClick={() => alert('Clicked')} />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Fragment>
                Sofiqul Islam
                <Toolbar style={{padding:0,minHeight:0}}>
                  <Typography variant="body2" className="mr-2" color="textPrimary">
                    225154
                  </Typography>
                  <Typography variant="body2" color="error">
                    Pending
                  </Typography>
                </Toolbar>
              </Fragment>
            )}
            secondary="Consequat aliquip ea voluptate elitea voluptate elit" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Avatar />
              </ListItemIcon>
              <ListItemText primary="Dr. Mojubur Rahman"
            secondary="Consequat aliquip ea voluptate elit"  />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
    </List>
  );
}

const Orders = () => {

  return (
    <Fragment>
      <CustomList />
      <CustomList />
      <CustomList />
      <CustomList />
    </Fragment>
  )
}
export default Orders;