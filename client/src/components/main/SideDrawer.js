import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox, Mail, Menu } from '@material-ui/icons';

import { NavLink } from 'react-router-dom';

import { arr } from './Navbar';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuBtn: {
    cursor: 'pointer',
  },
});

const SideDrawer = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <NavLink to="/" exact >
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>

        {arr.map((navItem, index) => (
            <NavLink key={index} to={navItem.url}>
              <ListItem button> 
                <ListItemText primary={navItem.name} />
              </ListItem>
            </NavLink>
        ))}
      </List>
    </div>
  );


  return (
    <Fragment>
      <IconButton  onClick={toggleDrawer('right', true)}  color="inherit">
        <Menu className={classes.menuBtn } />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </Fragment>
  );
}

export default SideDrawer;