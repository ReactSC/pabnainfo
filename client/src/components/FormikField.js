import React from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormikField = props => {
  const classes = useStyles();

  // const { name, label, placeholder, type='text' } = props;
  return(
    <FormControl className={classes.formControl}>
      {/* <Field
        as={ TextField }
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        fullWidth
        required
        autoComplete="off"
        /> */}
        <Field
          name="name"
          as={TextField}
        />
    </FormControl>
  )
}

export default FormikField;