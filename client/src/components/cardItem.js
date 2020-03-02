import React from 'react';

import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const CardItem = props => {

  return(
    <div>
      <Card>
        {/* Card Thumnails */}
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image="http://darunit.com/eop/images/1.jpg" />


        {/* Card Contents */}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Sofiqul Islam is a 
            Good Devloper
          </Typography>
          <Typography component="p">
            The current course is handed over to this component via the course parameter.
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