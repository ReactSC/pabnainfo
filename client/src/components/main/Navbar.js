import React, { Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery, useScrollTrigger, Slide, Container, IconButton } from '@material-ui/core';

import SideDrawer from './SideDrawer';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    brand: {
      width: 50,
      height: 50,
      margin: 5
    }
  }),
);


const Navbar = (props) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  return(
    <div style={{marginBottom:50}}>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <img className={ classes.brand } src="https://i.ibb.co/hy78S6t/favicon.png" alt="logo" />
            <Typography variant="h4" className={classes.title}>
              Pabnainfo
            </Typography>
            {md? (
              <Fragment>
                {['Home','About','Contant','Doctors'].map((navitem, index)=>(
                  <Button color="inherit" key={index}>{navitem}</Button>
                ))}
              </Fragment>
            ): <SideDrawer />
            
          }
            
          </Toolbar>

        </AppBar>
      </HideOnScroll>
    </div>
  )
}
export default Navbar;