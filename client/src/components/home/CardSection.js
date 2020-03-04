import React,{ useContext } from 'react';

import { Grid, Container, Typography, Toolbar, Button } from '@material-ui/core';
import { PabnainfoContext } from '../store/Contexts';
import CardItem from '../cardItem';

const CardSection = () => {
const context = useContext(PabnainfoContext);
const serviceProviders = context.serviceProviders;

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
          {serviceProviders.map(sp => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} style={{margin:'0 auto',padding:5}}>
              <CardItem 
                key       = {sp.id}
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
