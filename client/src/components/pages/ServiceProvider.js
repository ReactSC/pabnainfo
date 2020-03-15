import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Chip, Typography  } from '@material-ui/core';
import { SingleList1 } from '../dashboard/ServiceProviders';
import { SpContext, PabnainfoContext, CategoryContext } from '../store/Contexts';


const ServiceProvider = props => {
  const serviceProviders = useContext(SpContext).sp;
  const categories = useContext(CategoryContext).categories;
  const contexts = useContext(PabnainfoContext);
  // const categories = contexts.categories;
  const session = contexts.session;


  // JSS CODE
  const useStyles = makeStyles(theme => ({
    chip: {
      margin: theme.spacing(0.5),
    },
    active: {
      margin: theme.spacing(0.5),
      backgroundColor: 'black',
      color: '#fff'
    }
  }));
  const classes = useStyles();

  const filterHandler = label => {
    contexts.setSession('selectCat', label)
  }

  let sp = serviceProviders;
  session.selectCat ==='All' 
  ? sp =serviceProviders
  :sp = serviceProviders.filter(sp => sp.category === session.selectCat)


  return(
    <Fragment>
      <Container>
        <h2 className="mt-2">Service Providers</h2>
        <Chip
            label = "All"
            onClick={ () => filterHandler('All') }
            className={ session.selectCat === 'All' ? classes.active : classes.chip } />

        {categories.map(category =>(
          <Chip
            key = { category.id }
            label = { category.label }
            onClick={ () => filterHandler(category.label) }
            className={ session.selectCat === category.label ? classes.active : classes.chip } />
        ))}

          {sp.length >0 ? sp.map(sp =>(
            <SingleList1
              key         = {sp.id}
              id          = {sp.id}
              name        = {sp.name}
              category    = {sp.category}
              skill       = {sp.skill}
              degree      = {sp.degree}
              avater      = {sp.avater}
            />
          )) : <Typography className="text-center" variant="h6" color="error">No Service Provider has been Found!</Typography>}
        
        <Button className="my-2" variant="contained">
          <Link to="/addNew">Add New Service Provider</Link>
        </Button>

      </Container>
    </Fragment>
  )
}

export default ServiceProvider;