import React from 'react';
import { Container, Grid, Toolbar, useMediaQuery,useTheme, Typography, Button, IconButton } from '@material-ui/core';
import { ChevronLeft, ArrowRightAlt } from '@material-ui/icons';

import CardItem from '../cardItem'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

const CardSection2 = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const xs = useMediaQuery(theme.breakpoints.up('xs'));

  return(
    <div>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>

        <Toolbar style={{ padding: 0 }}>
          <Typography className="mb-4" variant="h4">
            Hello World Ut pariatur consequat
          </Typography>
          <Button style={{ marginLeft: 'auto', marginTop:'-25px' }}>
            More
          </Button>
        </Toolbar>

        <Grid container>
        <OwlCarousel
          className="owl-theme"
          items= { !xs ? 1 : !sm ? 2 : !md ? 3 : 4 }
          loop= {true}
          margin={10}
          center={false}
          autoPlay
          dots={false}
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          
        </OwlCarousel>

        <br/>
        <IconButton className="mr-4 p-2" size="small" color="inherit" style={{ border: '1px solid #000' }}>
          <ChevronLeft />
        </IconButton>
        <Button variant="outlined" style={{ borderRadius:'99px'}} color="inherit">
          <span style={{ padding:'1px 30px'}}>
            <ArrowRightAlt />
          </span>
        </Button>

        </Grid>
      </Container>
    </div>
  )
}

export default CardSection2;

const Item = () => {

  const style={
    grid: {
      maxWidth: '100%',
      margin:'15px auto',
      padding: '10px'
    },
    avater: {
    width: '100%',
    boxShadow: '0px 0px 5px #000000aa',
    border: '3px solid #fff'
    }
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} style={style.grid } >
      <div>
        <CardItem style={style.avater} />
      </div>
    </Grid>
  )
}