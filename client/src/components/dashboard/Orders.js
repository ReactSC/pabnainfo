import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Paper, ListItem, Avatar, ListItemIcon, ListItemText, Collapse, Typography, Toolbar } from '@material-ui/core';
import { ExpandLess, ExpandMore  } from '@material-ui/icons';

import { PabnainfoContext } from '../store/Contexts';
import Actions from './Actions';

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

const CustomList = props => {
  const { id, name, task, mobileNo, location, spID, status } = props;
  const context = useContext(PabnainfoContext);
  const serviceProviders = context.serviceProviders;
  
  // Filter A single Service Provider by Order ID
  const sp = id => serviceProviders.filter(sp => sp.id === id)


  const option = {
    data: [
    'Full View',
    'Pending',
    'Confirm',
    'See Ticket',
    'Delete'
  ]
};


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
            <Actions {...option} />
          </ListItemIcon>
          <ListItemText
            primary={(
              <Fragment>
                { name }
                <Toolbar style={{padding:0,minHeight:0}}>
                  <Typography variant="body2" className="mr-2" color="textPrimary">
                    { id }
                  </Typography>
                  <Typography variant="body2" color="error">
                    { status }
                  </Typography>
                </Toolbar>
              </Fragment>
            )}
            secondary={`${task} - ${mobileNo} - ${location}`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Avatar src={sp( spID)[0].avater } alt={ sp(spID)[0].name } />
              </ListItemIcon>
              <ListItemText primary={ sp(spID)[0].name }
            secondary={`${sp(spID)[0].skill}- ${sp(spID)[0].degree}`} />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
    </List>
  );
}




// Final Render
const Orders = () => {
  const context = useContext(PabnainfoContext);
  const orders = context.orders;

  return (
    <Fragment>
      {orders.map(order=>(
        <CustomList
          key = {order.id}
          id = {order.id}
          name = {order.name}
          task = {order.task}
          mobileNo = {order.phone}
          status= {order.status}
          location = {order.location}
          spID= {order.spID}
        />
      ))}
    </Fragment>
  )
}
export default Orders;