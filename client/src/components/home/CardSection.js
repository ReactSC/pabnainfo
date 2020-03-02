import React from 'react';

import { Grid, Container, Typography, Toolbar, Button } from '@material-ui/core';
import CardItem from '../cardItem';

const CardSection = () => {

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
          <CardItems />
          <CardItems />
          <CardItems />

        </Grid>
      </Container>


    </div>
  )
}

export default CardSection;

const CardItems = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} style={{margin:'0 auto',padding:5}}>
      <CardItem />
    </Grid>
  )
}