import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, CardHeader, Avatar, CardContent, CardMedia } from '@material-ui/core';
import { PabnainfoContext, CategoryContext } from '../store/Contexts';

const useStyle = makeStyles({
  root:{
    maxWidth: 345,
    background:'pink',
    padding: 0,
    margin: '10px auto',
    position: 'relative'
  },
  media: {
    height:10
  },
  avater: {
    width:120,
    height:120,
    borderRadius:'50%',
    fontSize:50,
    position:'absolute',
    top:55,
    left:'50%',
    transform:'translateX(-50%)'
  },
  content:{
    marginTop:43,
    paddingTop:65,
    background: 'linear-gradient(0, #272C78, #6278D2)',
    color: '#fff',
  }
})

const Categories = props => {
  const context = useContext(CategoryContext);
  const categories = context.categories;


  

  return(
    <Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {categories.map(cat=>(
            <SingleCard key={cat.id} label={cat.label} avater="w" about={cat.about} />
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
export default Categories;

const SingleCard = ({ label, avater,thumb, about }) => {
  const classes = useStyle();
  return(
    <Grid item xs={12} sm={4} md={3} >
      <Card className={classes.root}  elevation={3}>
        <CardHeader className="text-center" title={<b>{ label }</b>} />
        <CardMedia className={classes.media} images={ thumb } />
        <Avatar src={ avater } alt={ label } className={classes.avater} />
        <CardContent className={classes.content}>
          <Typography>
            { about }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}