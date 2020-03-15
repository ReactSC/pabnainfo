import React, { useRef, useContext, Fragment, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { Button, TextField, Typography, Grid, Container } from '@material-ui/core';
import { Print, Search, Refresh, Home } from '@material-ui/icons';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import TicketContents from '../TicketContent';
import { OrderContext, PabnainfoContext, CustomerContext } from '../store/Contexts';

import { date, month, year } from '../date';

const Card = () => {
  const ticket= useContext(PabnainfoContext).session.ticket;
  const time = new Date(ticket.orderTime);

  return(
    <Fragment>
      { ticket?<TicketContents
      name    = { ticket.customerName }
      address = { ticket.address }
      id      = { ticket.id }
      serial  = { ticket.serial }
      time    = { `${date(time)} ${month(time)}, ${year(time)}` } />
      : null }
    </Fragment>
  )
}

const SearchField = () => {
  const orders        = useContext(OrderContext).orders;
  const customers     = useContext(CustomerContext).customers;
  const contexts      = useContext(PabnainfoContext);
  const session       = contexts.session;
  const setSession    = contexts.setSession;

  const submitHandler = values => {
    const id = Number(values.id);
    const order = orders.find(order => Number(order.id) === id && order.status === "pending" );

    if( !order ){
      setSession('ticketErr', true)
    } else {
      const customer = customers.find(c => Number(c.id) === Number(order.customerID));
      const ticket = {
        id              : order.id,
        customerName    : customer.name,
        address         : `${customer.address} ${customer.city}`,
        task            : order.task,
        serial          : 0,
        orderTime       : order.time,
        status          : order.status
      }
      setSession('ticket', ticket)
    }
  }

  return(
    <Formik
      initialValues={{id:''}}
      onSubmit={submitHandler}
      >
        {
          ({dirty})=> 
          <Container>
            <Form>
              <Field
                as          = { TextField }
                className   = "mb-2"
                type        = "number"
                label       = "Search Ticket"
                name        = "id"
                placeholder = "Enter Your Order ID"
                fullWidth
              />
              <Button
                disabled    = {!dirty}
                type        = "submit"
                variant     = "contained"
                color       = "primary"
                fullWidth
                > <Search className="mr-2" /> Search Ticket
              </Button>
            </Form>
            {
            session.ticketErr ? <Typography className="text-center my-3" variant="h5" color="error" >Please Provide a Valid Order ID.</Typography>:null
            }
          </Container>
        }
    </Formik>
  )
}

// just use for printing the ticket (class bassed component)
class ComponentToPrint extends React.Component{
  render() {
    return (
      <Card />
    );
  }
}

const Ticket = (props) => {
  const orders        = useContext(OrderContext);
  const contexts      = useContext(PabnainfoContext);
  const session       = contexts.session;
  const setSession    = contexts.setSession;

  const componentRef  = useRef();
  const id            = Number(props.match.params.id);

  useEffect(() => {
    if(id) {
      const ticket = orders.find(order => Number(order.id) === id && order.status === "pending" );
      setSession('ticket', ticket)
      if(!ticket){setSession('ticketErr', true)}
    }
  },[]);
    
  const resetTicket = () => {
    setSession('ticket', null)
  }

  return (
    <Fragment>
      <div className='mx-auto my-3' style={{maxWidth:370}}>
        <Link to="/"><Button className="mb-3" variant="outlined"><Home className="mr-2" />Back to Home</Button></Link>
        { session.ticket ?
          <Fragment>
            <ComponentToPrint ref={componentRef} />
            <Container>
              <Grid container>
                <Grid item xs={6}>
                  <ReactToPrint
                    trigger={() => <Button
                      variant   = "contained"
                      color     = "primary"
                      fullWidth
                      > <Print className="mr-2" /> Print Ticket
                    </Button>}
                    content={() => componentRef.current}
                    />
                </Grid>
                <Grid item xs={6}>
                <Button
                  variant   = "contained"
                  color     = "default"
                  onClick   = { resetTicket }
                  fullWidth
                  > <Refresh /> Search Again
                </Button>
                </Grid>
              </Grid>
            </Container>
          </Fragment>
          : <SearchField />
        }
        
      </div>
    </Fragment>
  );
};
export default Ticket

