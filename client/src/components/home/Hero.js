import React from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';


import './Hero';

const Hero = () => {

  return(
    <div style={{
      background: 'url(//i.ibb.co/ssFR5m0/bgimage-2969683.gif) top center no-repeat', backgroundSize:'cover'
    }}>
      <Container maxWidth="lg">
        <Grid container style={{height:'100vh',minHeight:500}}>
          <Grid item xs={10} md={7} xl={7}  style={{margin:'auto 0'}}>
            <Typography variant="h3">
              Hello World, How Are You?
            </Typography>
            <Typography variant="h5" className="mt-3" >
              Non irure ad sunt mollit deserunt qui consectetur laborum nulla ipsum.
            </Typography>

            {/* <Paper variant="outlined" elevation={3} className="bg-primary px-3 pb-3 pt-0 mt-3"> */}

              <Button variant="contained" color="primary" className="mt-3" size="large">
                Get Started
              </Button>

            {/* </Paper> */}
            {/* <TagButton value="Get Started" />
            <TagButton value="See More" /> */}

          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Hero;
