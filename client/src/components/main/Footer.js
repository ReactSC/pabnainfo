import React, { Fragment } from 'react';
import { Container, Grid, List, Link, ListItem, Typography, Toolbar, IconButton } from '@material-ui/core';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';

const Footer = () => {

  return(
    <Fragment>
      <div style={{background:'#affff9'}}>
        <br />
        <br />
        <Container style={{paddingTop:50, paddingBottom:50}}>
          <Grid container >
            <Grid item xs={12} sm={12} md={3}>
              <Typography variant="h4">
                Pabnainfo
              </Typography>
              <Typography variant="body1">
                This is a service warent website.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <List>
                <Typography variant="body1" style={{fontWeight: 600}}>
                  List Item Header
                </Typography>
                <FooterList />
                <FooterList />
                <FooterList />
                <FooterList />
              </List>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
            <List>
                <Typography variant="body1" style={{fontWeight: 600}}>
                  List Item Header
                </Typography>
                <FooterList />
                <FooterList />
                <FooterList />
                <FooterList />
              </List>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <List>
                <Typography variant="body1" style={{fontWeight: 600}}>
                  List Item Header
                </Typography>

                <Toolbar style={{padding:0}}>
                  <IconButton>
                    <Facebook />
                  </IconButton>

                  <IconButton>
                    <Twitter />
                  </IconButton>

                  <IconButton>
                    <LinkedIn />
                  </IconButton>

                </Toolbar>
              </List>
            </Grid>


          </Grid>

        </Container>
      </div>
      <Cradit />
    </Fragment>
  )
}

export default Footer;

const FooterList = () => (
  <ListItem style={{padding:'8px 0 0 0'}} >
    <Link
      component="button"
      variant="body2"
    >
      Button Link
    </Link>
  </ListItem>
)

const Cradit = () => {

  return(
    <div>
      <Container maxWidth="lg">
        <Grid container justify="center">
          <Toolbar>
            <Typography>
              Powerd By:  
              <Link href="//www.darunit.com">
                Darun IT
              </Link>
            </Typography>
          </Toolbar>
        </Grid>
      </Container>
    </div>
  )
}