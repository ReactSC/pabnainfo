import React, { Fragment, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Avatar, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { SpContext } from '../store/Contexts';


// import Actions from './Actions';

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
export const SingleList1 = props => {

const{ id, name, category, skills, degree, avater } = props;


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
            <Avatar src={ avater } alt={ name } />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Fragment>
                { name }
                <Toolbar style={{padding:0,minHeight:0}}>
                  <Typography variant="body2" className="mr-2" color="textPrimary">
                    { props.role? props.role : props.location? props.location : category }
                  </Typography>
                </Toolbar>
              </Fragment>
            )}
            secondary={props.about? props.about:`${skills} - ${degree}`} />

        </ListItem>

{/* Dialog */}
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          { name }
          <IconButton onClick={handleClose} className={ classes.closeButton }>
            <Close />
          </IconButton>

          <Toolbar style={{padding:0,minHeight:0}}>
            <Typography variant="body1" className="mr-2" color="textPrimary">
              { props.role? props.role : props.location? props.location :category }
            </Typography>
          </Toolbar>
          <Toolbar style={{padding:0,minHeight:0}}>
          <Typography variant="body2" className="mr-2" color="textPrimary">
            {props.about? props.about:`${skills} - ${degree}`}
            </Typography>
          </Toolbar>
        </DialogTitle>

        <DialogContent>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" color="primary">
            <Link to={`/order/${id}`}>Get Service</Link>
          </Button>
          {/* <Button variant="outlined" onClick={handleClose} color="primary">
            Verify
          </Button>
          <Button variant="outlined" onClick={handleClose} color="secondary">
            Delete
          </Button> */}
        </DialogActions>
      </Dialog>
        
        
      </Paper>
    </List>
  );
}

// Final Render
const ServiceProviders = () => {
  const serviceProviders = useContext(SpContext).sp;
  return(
    <Fragment>
      {serviceProviders.map(sp =>(
        <SingleList1
          key         = {sp.id}
          id          = {sp.id}
          name        = {sp.name}
          category    = {sp.category}
          skills       = {sp.skills}
          degree      = {sp.degree}
          avater      = {sp.avater}
        />
      ))}
    </Fragment>
  )
}

export default ServiceProviders;