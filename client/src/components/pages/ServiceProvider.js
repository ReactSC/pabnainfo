import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Chip, Typography  } from '@material-ui/core';
import { SingleList1 } from '../dashboard/ServiceProviders';
import { PabnainfoContext } from '../store/Contexts';


const ServiceProvider = props => {
  const contexts = useContext(PabnainfoContext);
  const serviceProviders = contexts.serviceProviders;
  const categories = contexts.categories;
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

  var sp = serviceProviders;
  session.selectCat ==='All' 
  ? sp =serviceProviders
  :sp = serviceProviders.filter(sp => sp.catagory === session.selectCat)


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
              name        = {sp.name}
              catagory    = {sp.catagory}
              skill       = {sp.skill}
              degree      = {sp.degree}
              avater      = {sp.avater}
            />
          )): <Typography className="text-center" variant="h6" color="error">No Service Provider has been Found!</Typography>}
      </Container>
    </Fragment>
  )
}

export default ServiceProvider;