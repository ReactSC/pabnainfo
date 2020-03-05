import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Avatar, Toolbar, useMediaQuery,useTheme, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PabnainfoContext } from '../store/Contexts';

const useStyle= makeStyles({
  grid: {
    maxWidth: '100%',
    margin:'15px auto',
    cursor: 'pointer'
  },
  avater: {
  width: 100,
  height: 100,
  background: '#3F51B5',
  fontSize: '50px',
  boxShadow: '0px 0px 5px #000000aa',
  border: '3px solid #fff'
  }
})

const SingleItem = props => {
  const { label, avater } = props;
  const contexts = useContext(PabnainfoContext);
  const classes = useStyle();
  
  const onClickandler = label => {
    contexts.setSession('selectCat', label)
  }

  return(
    <Grid item xs={4} sm={2} className={classes.grid} >
      <Link to="/sp" onClick = {()=> onClickandler(label) } >
        <Avatar alt={label} src={avater} className={classes.avater} />
        <Typography variant="body1" className="mt-3">
          { label }
        </Typography>
      </Link>
    </Grid>
  )
}

const Categories = () => {
  const context = useContext(PabnainfoContext);
  const categories = context.categories;

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));



  return(
    <div style={{background:'#ffaacc'}}>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>

        <Toolbar style={{ padding: 0 }}>
          <Typography className="mb-4" variant="h4">
            Most Uses Type of Services
          </Typography>
          <Button style={{ marginLeft: 'auto', marginTop:'-25px' }}>
            <Link to="/categories">More</Link>
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
          {categories.map(cat => (
            <SingleItem
              key = { cat.id } 
              label = {cat.label}
              avater = {cat.avater}
            />
          ))}
        </OwlCarousel>

        </Grid>
      </Container>
    </div>
  )
}

export default Categories;