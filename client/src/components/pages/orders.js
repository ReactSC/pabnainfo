import React, { useContext, Fragment } from 'react';
import { PabnainfoContext } from '../store/Contexts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, TextField, Button } from '@material-ui/core'
// import {  } from '@material-ui/core/icons'

const useStyle = makeStyles({
  root:{},
  paper: {
    // width: '100%',
    // minWidth:360,
    // margin:'auto',
    // position:'inherit'
  }
})

const Order = () => {
  const contexts = useContext(PabnainfoContext);
  const serviceProviders = contexts.serviceProviders;

  const sp = serviceProviders.filter(sp=> sp.id === contexts.session.selectSP)
  const classes = useStyle();

  const initialValues={
    name        : String,
    // phone       : String,
    gender      : String,
    // age         : Number,
    // location    : String,
    // selectSP    : Number,
    // givenTask   : String,
    // orderTime   : Date
  }

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .required("Required"),
  })

  const SubmitHandler = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return(
    <Fragment>
      <h1>Order</h1>

      <Formik initialValues={ initialValues }
        onSubmit={ SubmitHandler }
        validationSchema={ orderSchema }
      >
        {({isValid}) => (
        <Container maxWidth="lg">
          <Grid container>
            <Form>
              <Paper className={classes.paper} >
                <Field name="name" placeholder="Full Name" />
                <Field name="gender" as="select">
                  <option selected>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">female</option>
                </Field>
                <button disabled={isValid} type="submit">Submit</button>
              </Paper>
            </Form>
          </Grid>
        </Container>
        // <Form>
        //   <Field name="phone" placeholder="01701155844" />
        //   {/* <Field name="name" placeholder="Full Name" />
        //   <Field name="gender" placeholder="Gender" />
        //   <Field name="age" type="number" placeholder="25" />
        //   <Field name="location" placeholder="Address" />
        //   <Field name="selectSP" placeholder="Service Provider" />
        //   <Field name="givenTask" placeholder="Task Name" />
        //   <Field name="orderTime" type="hidden" /> */}

        //   <ErrorMessage name="password" component="div" />
        //   <button type="submit" disabled={isSubmitting}>
        //     Submit
        //   </button>
        // </Form>
      )}
      </Formik>
      
    </Fragment>
  )
}
export default Order;



// const InputField = props => {
//   const classes = useStyle();

//   const { name, type='text', placeholder } = props;

//   return(
//     <Grid item alignItems="center">
//       <TextField
//         // error={errors.email && touched.email}
//         label={name}
//         name={name}
//         className={classes.textField}
//         // onChange={handleChange}
//         // onBlur={handleBlur}
//         // helperText={(errors.email && touched.email) && errors.email}
//         margin="normal"
//         fullWidth
//       />
//     </Grid>
//   )
// }