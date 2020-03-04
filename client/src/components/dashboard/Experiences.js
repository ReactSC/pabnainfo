import React,{ useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Paper } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { PabnainfoContext } from '../store/Contexts';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Experiences = () =>{
  const contexts = useContext(PabnainfoContext);
  const experiences = contexts.experiences;

  const classes = useStyles();

  const handleDelete = id => {
    contexts.rmExperience(id)
  };

  const addNewHandle = () =>{
    alert('Add New')
  }

  return (
    <Paper className={classes.root}>
      {experiences.map(data => {
        return (
          <Chip
            key={data.id}
            label={data.label}
            onDelete={() => handleDelete(data.id)}
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

export default Experiences;