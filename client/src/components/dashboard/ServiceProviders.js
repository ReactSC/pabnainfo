import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemIcon, ListItemAvatar, ListItemText, Toolbar, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import Actions from './Actions';

// custome StyleSheet
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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));


// Single Lsit Service Provider
export const SingleList1 = () => {


  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <List
      component="nav"
      className={classes.root}
    >
      <Paper>
        <ListItem button onClick={handleClick}>
          <ListItemAvatar>
            <Avatar src="http://darunit.com/eop/images/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Fragment>
                Sofiqul Islam
                <Toolbar style={{padding:0,minHeight:0}}>
                  <Typography variant="body2" className="mr-2" color="textPrimary">
                    Doctor
                  </Typography>
                </Toolbar>
              </Fragment>
            )}
            secondary="Consequat aliquip ea voluptate elitea voluptate elit" />

        </ListItem>

{/* Dialog */}
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Dr Mujibur Rahman
          <IconButton onClick={handleClose} className={ classes.closeButton }>
            <Close />
          </IconButton>

          <Toolbar style={{padding:0,minHeight:0}}>
            <Typography variant="body1" className="mr-2" color="textPrimary">
              Doctor
            </Typography>
          </Toolbar>
          <Toolbar style={{padding:0,minHeight:0}}>
          <Typography variant="body2" className="mr-2" color="textPrimary">
              Magna est ipsum exercitation fugiat exercitation
            </Typography>
          </Toolbar>
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>

        <DialogActions dividers>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Verify
          </Button>
          <Button variant="outlined" onClick={handleClose} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
        
        
      </Paper>
    </List>
  );
}


// Final Render
const ServiceProviders = () => {
  return(
    <Fragment>
      <SingleList1 />
      <SingleList1 />
      <SingleList1 />
      <SingleList1 />
    </Fragment>
  )
}

export default ServiceProviders;