import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const CardItem = props => {
  const {id, name, avater, about} = props;
  
  return(
    <div>
      <Card>
        {/* Card Thumnails */}
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={ avater } />


        {/* Card Contents */}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            { name }
          </Typography>
          <Typography component="p">
            { about?about.slice(0, 60) : about }
          </Typography>
        </CardContent>

        {/* Card Actions */}
        <CardActions >
          <Button color="primary" style={{marginLeft: 'auto'}}>
            <Link to={`/order/${id}`}>
              Get Service
            </Link>
          </Button>
        </CardActions>

      </Card>
    </div>
  )
}

export default CardItem;