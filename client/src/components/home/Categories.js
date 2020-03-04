import React,{ useContext } from 'react';

import { Container, Grid, Avatar, Toolbar, useMediaQuery,useTheme, Typography, Button } from '@material-ui/core';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PabnainfoContext } from '../store/Contexts';

const Categories = () => {
  const context = useContext(PabnainfoContext);
  const categories = context.categories;

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  const style={
    grid: {
      maxWidth: '100%',
      margin:'15px auto'
    },
    avater: {
    width: 100,
    height: 100,
    background: '#3F51B5',
    fontSize: '50px',
    boxShadow: '0px 0px 5px #000000aa',
    border: '3px solid #fff'
    }
  }

  return(
    <div style={{background:'#ffaacc'}}>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>

        <Toolbar style={{ padding: 0 }}>
          <Typography className="mb-4" variant="h4">
            Hello World Ut pariatur consequat
          </Typography>
          <Button style={{ marginLeft: 'auto', marginTop:'-25px' }}>
            More
          </Button>
        </Toolbar>

        <Grid container align='center' justify='center'>
        <OwlCarousel
          className="owl-theme"
          items= { !sm ? 3 :!md ? 4 : 6 }
          loop= {true}
          margin={10}
          center={false}
          autoplay
          autoplayTimeout={2500}
          dots={false}
          autoplayHoverPause
        >
          {categories.map(category => (
            <Grid key={ category.id } item xs={4} sm={2} style={ style.grid }>
              <div>
                <Avatar alt={category.label} src="http" style={ style.avater } />
                <Typography variant="body1" className="mt-3">
                  { category.label }
                </Typography>
              </div>
            </Grid>
          ))}
        </OwlCarousel>

        </Grid>
      </Container>
    </div>
  )
}

export default Categories;
