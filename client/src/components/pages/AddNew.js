import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, TextField, Select, MenuItem, Button, Typography, FormControl, InputLabel } from '@material-ui/core'

import { SpContext } from '../store/Contexts';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddNew = props => {
  const addSP = useContext(SpContext).addSP;
  const classes = useStyles();

  const initialValues = {
    name: '',
    gender: '',
    phone: '',
    email: '',
    category: '',
    subCategory: '',
    addTime: Date.now(),
    addedBy:'',
  }
  const AddNewSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'Too Short!')
      .required('Required')
  })


  const submitHandler = values => {
    addSP(values)
    console.log(values)
    // props.history.push('/');
  }

  return (
    <Container>
      <Grid item sm={8} className="mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={AddNewSchema}
          onSubmit={submitHandler} >
          {
            ({
              errors,
              touched,
              isValid,
              isValidating,
              dirty
            }) => {

              return (
                <Form>
                  <Paper className="p-3 m-5">
                    <Typography className="mx-auto" variant="h4">Add New Service Provider</Typography>

                    <FormControl className={classes.formControl}>
                      <Field
                        as={TextField}
                        name="name"
                        label="Full Name"
                        placeholder="John Duo"
                        fullWidth
                        required />
                    </FormControl>
                    <ErrorMessage name="name" />

                    <FormControl className={classes.formControl}>
                      <Field
                        as={TextField}
                        name="phone"
                        label="Phone"
                        placeholder="01234567890"
                        fullWidth
                        required />
                    </FormControl>
                    <ErrorMessage name="phone" />

                    <FormControl className={classes.formControl}>
                      <Field
                        as={TextField}
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="example@company.com"
                        fullWidth />
                    </FormControl>
                    <ErrorMessage name="email" />

                    <FormControl className={classes.formControl}>
                      <InputLabel id="gender">Gender</InputLabel>
                      <Field
                        as={Select}
                        name="gender"
                        labelId="gender"
                        placeholder="Select Your Gender"
                        className={classes.selectEmpty}
                        fullWidth >
                        <MenuItem value="ssssssd">Select Your Gender</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Field>
                    </FormControl>
                    <ErrorMessage name="gender" />

                    <Grid container justify="space-between">

                      <Grid item xs={12} sm={12} md={6}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="category">Category</InputLabel>
                          <Field
                            as={Select}
                            name="category"
                            labelId="category"
                            placeholder="Select Category"
                            className={classes.selectEmpty}
                            fullWidth >
                            <MenuItem value="c">Select Your Category</MenuItem>
                            <MenuItem value="doctor">Doctor</MenuItem>
                            <MenuItem value="driver">Driver</MenuItem>
                          </Field>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6}>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="subCategory">Sub Category</InputLabel>
                          <Field
                            as={Select}
                            name="subCategory"
                            labelId="subCategory"
                            placeholder="Select Sub Category"
                            className={classes.selectEmpty}
                            fullWidth >
                            <MenuItem value="c">Select Your Sub Category</MenuItem>
                            <MenuItem value="doctor a">Doctor</MenuItem>
                            <MenuItem value="driver b">Driver</MenuItem>
                          </Field>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Button
                      disabled={!isValid}
                      className="mt-3"
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >Add SP
                    </Button>

                  </Paper>
                </Form>
              )
            }
          }
        </Formik>
      </Grid>
    </Container>
  )
}

export default AddNew;
 