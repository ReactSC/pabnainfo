import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Paper, ListItem, Avatar, ListItemIcon, ListItemText, Collapse, Typography, Toolbar } from '@material-ui/core';
import { ExpandLess, ExpandMore  } from '@material-ui/icons';

import { SpContext, OrderContext, CustomerContext } from '../store/Contexts';
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
  const { orderId, name, task, mobileNo, location, spName, spAvater, spSkills, spDegrees, status } = props;


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
                    { orderId }
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
                <Avatar src={ spAvater } alt={ spName } />
              </ListItemIcon>
              <ListItemText primary={spName }
            secondary={`${ spSkills }- ${ spDegrees }`} />
            </ListItem>
          </List>
        </Collapse>
      </Paper>
    </List>
  );
}


// Final Render
const Orders = props => {
  const orders = useContext(OrderContext).orders;
  const customers = useContext(CustomerContext).customers;
  const serviceProviders = useContext(SpContext).sp;


  // mobile number get by user
  return (
    <Fragment>
      {orders.map(order=> {
        // Filter A single Service Provider by Order ID
        const customer = customers.find(c => Number(c.id) === Number(order.customerID))
        var sp = serviceProviders.filter(sp => Number(sp.id) === Number(order.spID))[0];
        return (
          <CustomList
            key={order.id}
            orderId={order.id}
            name={customer && customer.name}
            task={order.task}
            mobileNo={customer && customer.phone}
            status={order.status}
            location={`${customer && customer.address} ${customer &&
              customer.city}`}
            spID={order.spID}
            sp={sp}
            spName={sp && sp.name}
            spAvater={sp && sp.avater}
            spSkills={sp && sp.skills}
            spDegrees={sp && sp.degree}
          />
        );
      })}
    </Fragment>
  )
}
export default Orders;