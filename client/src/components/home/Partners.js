import React, { useContext } from 'react';

import { Link, Container, Grid, Toolbar, useMediaQuery,useTheme, Typography } from '@material-ui/core';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PabnainfoContext } from '../store/Contexts';
// import { Link } from 'react-router-dom';

const Partners = () => {
  const context = useContext(PabnainfoContext);
  const partners = context.partners;

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  const style={
    grid: {
      maxWidth: '100%',
      margin:'15px auto'
    },
    avater: {
    width: 150,
    height: 80,
    padding: 5,
    boxShadow: '0px 0px 5px #00000011',
    borderRadius: 5,
    cursor: 'pointer'
    }
  }

  return(
    <div>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>

        <Toolbar style={{ padding: 0 }}>
          <Typography className="mb-4" variant="h4">
            Our Partner
          </Typography>
        </Toolbar>

        <Grid container align='center' justify='center'>
        <OwlCarousel
          className="owl-theme"
          items= { !sm ? 2 :!md ? 4 : 6 }
          loop= {true}
          margin={10}
          center={false}
          autoplay
          autoplayTimeout={3000}
          dots={false}
          autoplayHoverPause={true}
        >
          {partners.map(partner => (
            <Grid item xs={4} sm={2} style={ style.grid }>
              <Link href={ '//'+partner.url } >
                <img
                  style={style.avater}
                  src={ partner.logo }
                  alt={ partner.name } />
              </Link>
            </Grid>
          ))}

        </OwlCarousel>

        </Grid>
      </Container>
    </div>
  )
}

export default Partners;

