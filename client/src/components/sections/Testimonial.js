import React, { Fragment } from 'react';
import { Container, Grid, Typography, IconButton, Button, Toolbar } from '@material-ui/core';
import { ChevronLeft, ArrowRightAlt } from '@material-ui/icons';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = props => {

  return(
    <div style={{ background:'#cc88ff url(https://i.ibb.co/dcCqwtc/aaa.gif) no-repeat top left' }}>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>
        <Grid container >
          <Fragment>
            <OwlCarousel
              className="owl-theme mb-4"
              items= {1}
              loop
              margin={10}
              center={false}
              autoplay
              autoplayTimeout={5000}
              dots={false}
              // nav
              URLhashListener
              startPosition= {0}
              // navText={["Prev", "Next"]}
              >
              <Item />
              <Item />
              <Item />
            </OwlCarousel>

          </Fragment>
          
          <br/>
          <ArrButton />

        </Grid>
      </Container>
    </div>
  )
}

export default Testimonial;

const Item = props => {
  return (
    <Fragment>
      <Grid item xs={9} sm={5} style={{ marginLeft:'auto',color:'#fff'}}>
      <Typography className="mb-1" variant="h4" color="inherit">
        Sofiqul Islam
      </Typography>
      <Typography variant="body2">
        Web Developer
      </Typography>
      <Typography variant="body2">
        Darun IT
      </Typography>
      <br/>
      <Typography variant="body1">
        Magna id id sit labore Lorem tempor Lorem.Magna id id sit labore Lorem tempor Lorem.Magna id id sit labore Lorem tempor Lorem.Magna id id sit labore Lorem tempor Lorem.Magna id id sit labore Lorem tempor Lorem.
      </Typography>

    </Grid>
    </Fragment>
  )
}

const ArrButton = () => {

  return(
    <Grid item xs={9} sm={5} style={{ marginLeft:'auto',color:'#fff'}}>
        <IconButton className="mr-4 p-2" size="small" color="inherit" style={{ border: '1px solid #fff' }}>
          <ChevronLeft />
        </IconButton>
        <Button className="owl-next" variant="outlined" style={{ borderRadius:'99px'}} color="inherit" >
          <span style={{ padding:'1px 30px'}}>
            <ArrowRightAlt />
          </span>
        </Button>
    </Grid>
  )
}