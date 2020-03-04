import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const CardItem = props => {
const {name, avater, about} = props;

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
            { about.slice(0, 75) }
          </Typography>
        </CardContent>

        {/* Card Actions */}
        <CardActions >
          <Button size="small" color="primary" href="/" style={{marginLeft: 'auto'}}>
            View Item
          </Button>
        </CardActions>

      </Card>
    </div>
  )
}

export default CardItem;