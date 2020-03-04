import React, { Fragment, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Chip  } from '@material-ui/core';
import { SingleList1 } from '../dashboard/ServiceProviders';
import { PabnainfoContext } from '../store/Contexts';


// import { makeStyles } from '@material-ui/core/styles';
// import { Chip, Paper } from '@material-ui/core';
// import { Add } from '@material-ui/icons';


const ServiceProvider = () => {
  const contexts = useContext(PabnainfoContext);
  const serviceProviders = contexts.serviceProviders;
  const categories = contexts.categories;

  const[cat, setCat] = useState('All');

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

  const addNewHandle = label => {
    setCat(label)
  }
  var sp = serviceProviders;
  cat ==='All' ? sp =serviceProviders: sp = serviceProviders.filter(sp => sp.catagory === cat)






  return(
    <Fragment>
      <Container>
        <h2 className="mt-2">Service Providers</h2>
        <Chip
            label = "All"
            onClick={ () => addNewHandle('All') }
            className={ cat === 'All' ? classes.active : classes.chip } />

        {categories.map(category =>(
          <Chip
            key = { category.id }
            label = { category.label }
            onClick={ () => addNewHandle(category.label) }
            className={ cat === category.label ? classes.active : classes.chip } />
        ))}

          {sp ? sp.map(sp =>(
            <SingleList1
              key         = {sp.id}
              name        = {sp.name}
              catagory    = {sp.catagory}
              skill       = {sp.skill}
              degree      = {sp.degree}
              avater      = {sp.avater}
            />
          )): "No Service Provider"}
      </Container>
    </Fragment>
  )
}

export default ServiceProvider;