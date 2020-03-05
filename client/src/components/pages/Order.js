import React, { useContext, Fragment } from 'react';
import { PabnainfoContext } from '../store/Contexts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, TextField, Select, MenuItem, Button, Typography, FormControl, InputLabel} from '@material-ui/core'
// import {  } from '@material-ui/core/icons'
import { SingleList1 } from '../dashboard/ServiceProviders';
// import FormikField from '../FormikField'

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Order = () => {
  const contexts = useContext(PabnainfoContext);
  const serviceProviders = contexts.serviceProviders;

  const sp = serviceProviders.filter(sp=> sp.id === contexts.session.selectSP)[0];
  const classes = useStyles();

  const initialValues = {
    name: '',
    phone: '',
    email:'',
    location: '',
    age: Number,
    gender: '',
    task: ''
  }
  const OrderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    phone: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    task: Yup.string()
      .required('Required'),
  })


  const submitHandler = (values) => {
    alert(JSON.stringify(values, null, 2))
    console.log(values)
  }

  return(
    <Container>
      <Grid item sm={8} className="mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={OrderSchema}
          onSubmit={submitHandler} >
          {
            ({
              errors,
              touched,
              isValid,
              isValidating,
              dirty
            }) => {
              
              return(
                <Form>
                  <Paper className="p-3 m-5">
                    <Typography variant="h6">Order to,</Typography>
                    <SingleList1
                      name        = {sp.name}
                      catagory    = {sp.catagory}
                      skill       = {sp.skill}
                      degree      = {sp.degree}
                      avater      = {sp.avater}
                    />

                    {/* <Field type="hidden" name="spID" value={sp.id} /> */}
                    <FormControl className={classes.formControl}>
                      <Field
                        as={ TextField }
                        type="number"
                        name="phone"
                        label="Phone"
                        placeholder="01234567890"
                        fullWidth
                        required />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                      <Field
                        as={ TextField }
                        type="text"
                        name="name"
                        label="Full Name"
                        placeholder="John Duo"
                        fullWidth
                        required />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                      <Field
                        as={ TextField }
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="example@company.com"
                        fullWidth
                        required />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                      <InputLabel id="city">Location *</InputLabel>
                      <Field
                        as={ Select }
                        name="location"
                        labelId="city"
                        placeholder="Select Your City"
                        className={classes.selectEmpty}
                        fullWidth >
                        <MenuItem value="ssssssd">Select Your City</MenuItem>
                        <MenuItem value="pabnaSadar">Pabna Sadar</MenuItem>
                        <MenuItem value="Iswardi">Ishwardi</MenuItem>
                      </Field>
                    </FormControl>

                    <Grid container justify="space-between">

                      <Grid item xs={12} sm={12} md={6}>
                        <FormControl className={classes.formControl}>
                          <Field
                            as={ TextField }
                            type="number"
                            name="age"
                            label="Your Age"
                            placeholder="24"
                            fullWidth />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} sm={12} md={5}>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="gender">Gender</InputLabel>
                        <Field
                          as={ Select }
                          name="gender"
                          labelId="gender"
                          placeholder="Select Gender"
                          className={classes.selectEmpty}
                          fullWidth >
                          <MenuItem value="c">Select Your Gender</MenuItem>
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Field>
                      </FormControl>
                      </Grid>
                    </Grid>

                    <FormControl className={classes.formControl}>
                      <InputLabel id="task">Problem or Task *</InputLabel>
                      <Field
                        as={ Select }
                        name="task"
                        labelId="task"
                        className={classes.selectEmpty}
                        fullWidth >
                        <MenuItem value="a" >Select Your Task</MenuItem>
                        <MenuItem value="a">Problem A</MenuItem>
                        <MenuItem value="b">Problem B</MenuItem>
                      </Field>
                    </FormControl>
                    <Button
                      disabled={!errors }
                      className="mt-3"
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >Order Submit
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

export default Order;
