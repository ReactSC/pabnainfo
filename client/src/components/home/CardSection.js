import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Typography, Toolbar, Button } from '@material-ui/core';
import { SpContext } from '../store/Contexts';
import CardItem from '../cardItem';

const CardSection = () => {
  const serviceProviders = useContext(SpContext).sp;

  return(
    <div>
      <Container maxWidth="lg" style={{paddingTop:80, paddingBottom:80}}>

        <Toolbar style={{ padding: 0 }}>
          <Typography className="mb-4" variant="h4">
            Top Rated Service Providers
          </Typography>
          <Button style={{ marginLeft: 'auto', marginTop:'-25px' }}>
            <Link to="/sp" >More</Link>
          </Button>
        </Toolbar>

        <Grid container>
          {serviceProviders.map(sp => (
            <Grid key= {sp.id} item xs={12} sm={6} md={4} lg={4} xl={3} style={{margin:'0 auto',padding:5}}>
              <CardItem
                id        = {sp.id}
                name      = {sp.name}
                avater    = {sp.avater}
                about     = {sp.about}
              />
            </Grid>
          ))}
        </Grid>
      </Container>


    </div>
  )
}

export default CardSection;
