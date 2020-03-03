import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Paper } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { PabnainfoContext } from '../store/Contexts'

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

const MenuItems = () =>{
  const contexts = useContext(PabnainfoContext);
  const menuItems = contexts.menuItems;

  const classes = useStyles();
  
  const handleDelete = id => {
    contexts.rmMenuItem(id)
  };

  const addNewHandle = () =>{
    alert('Add New')
  }

  return (
    <Paper className={classes.root}>
      {menuItems.map(data => {
        let icon;

        if (data.label === 'Add New') {
          icon = <Add />;
        }

        return (
          <Chip
            key={data.id}
            icon={icon}
            label={data.name}
            onDelete={ () => handleDelete(data.id)}
            className={classes.chip}
          />
        );
      })}
      <Chip
        icon={<Add />}
        label = "Add New"
        onClick={ addNewHandle }
        className={classes.chip} />
    </Paper>
  );
}

export default MenuItems;