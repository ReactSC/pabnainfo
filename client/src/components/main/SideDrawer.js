import React, { useContext, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import { PabnainfoContext } from '../store/Contexts';


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

const SideDrawer = () => {
  const menuItems = useContext(PabnainfoContext).menuItems;

  const classes = useStyles();
  const [state, setState] = useState({right: false});

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

        {menuItems.map( menu => (
            <NavLink key={ menu.id } to={ menu.url }>
              <ListItem button> 
                <ListItemText primary={ menu.name } />
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