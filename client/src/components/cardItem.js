import React,{ useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { PabnainfoContext } from './store/Contexts';

const CardItem = props => {
  const contexts = useContext(PabnainfoContext);
  const {id, name, avater, about} = props;

  const handleOrder = id => {
    contexts.setSession('selectSP', id)
    console.log(contexts.session)
  }

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
            { about.slice(0, 60) }
          </Typography>
        </CardContent>

        {/* Card Actions */}
        <CardActions >
          <Button color="primary" onClick={() => handleOrder(id)} style={{marginLeft: 'auto'}}>
            <Link to="/order">
              Get Service
            </Link>
          </Button>
        </CardActions>

      </Card>
    </div>
  )
}

export default CardItem;