import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Paper } from '@material-ui/core';
import { Add } from '@material-ui/icons';

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
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Experiences One' },
    { key: 1, label: 'Experiences Two' },
    { key: 2, label: 'Experiences three' },
    { key: 3, label: 'Experiences Four' },
    { key: 4, label: 'Experiences Five' },
    { key: 5, label: 'Add New' },
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const addNewHandle = () =>{
    alert('Add New')
  }

  return (
    <Paper className={classes.root}>
      {chipData.map(data => {
        let icon;

        if (data.label === 'Add New') {
          icon = <Add />;
        }

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.label}
            onClick={data.label === 'Add New' ? addNewHandle : undefined }
            onDelete={data.label === 'Add New' ? undefined : handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  );
}

export default Experiences;