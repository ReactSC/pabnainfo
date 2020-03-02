import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery, useScrollTrigger, Slide, Container, IconButton } from '@material-ui/core';

import SideDrawer from './SideDrawer';
import BackToTop from '../ScrollTop';


const HideOnScroll = props => {
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

  const arr = [
    {name: 'About', url:'/about'},
    {name: 'Contact', url:'/contact'},
    {name: 'FAQ', url:'/faq'},
    {name: 'Worker', url:'/sp'}
  ]

  return(
    <div>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <img className={ classes.brand } src="https://i.ibb.co/hy78S6t/favicon.png" alt="logo" />
            <Typography variant="h4" className={classes.title}>
              Pabnainfo
            </Typography>
            {md? (
              <Fragment>
                <NavLink activeStyle={{borderBottom:'1px solid #fff'}} to="/" exact>
                  <Button style={{color:'#fff'}} >
                    Home
                  </Button>
                </NavLink>

                {arr.map((navitem, index)=>(
                  <NavLink activeStyle={{borderBottom:'1px solid #fff'}} to={navitem.url}>
                    <Button style={{color:'#fff'}} key={index}>
                      {navitem.name}
                    </Button>
                  </NavLink>
                ))}
              </Fragment>
            ): <SideDrawer />
            
          }
            
          </Toolbar>

        </AppBar>
      </HideOnScroll>
      <BackToTop />
    </div>
  )
}
export default Navbar;