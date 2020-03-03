import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Paper } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { PabnainfoContext } from '../store/Contexts';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Categories = () =>{
  const contexts = useContext(PabnainfoContext);
  const categories = contexts.categories;

  const classes = useStyles();


  const handleDelete = id => {
    contexts.rmCategories(id)
  };

  const addNewHandle = () =>{
    alert('Add New')
  }

  return (
    <Paper className={classes.root}>
      {categories.map(data => {
        let icon;

        if (data.label === 'Add New') {
          icon = <Add />;
        }

        return (
          <Chip
            key={data.id}
            icon={icon}
            label={data.label}
            onClick={data.label === 'Add New' ? addNewHandle : undefined }
            onDelete={data.label === 'Add New' ? undefined : () => handleDelete(data.id)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}

export default Categories;