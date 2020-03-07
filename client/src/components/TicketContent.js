import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Divider, Table, TableRow, TableCell, TableBody } from '@material-ui/core';


const useStyle = makeStyles({
  ticketWrap: {
    width: '100%',
    maxWidth:370,
    // height:250,
    background:'#f0ffff',
    padding: 10,
    margin:'10px auto',
  },
  ticket:{
    border:'2px solid #000',
    position: 'relative',
  },
  bg:{
    width: '40%',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    opacity: 0.2
  },
  table: {
    fontSize: 16,
    border: 0
  },
  bold: {
    fontWeight: 500
  }
})

const TicketContent = props => {
  const classes = useStyle();
  const { ticketWrap, ticket, bg, bold, table } = classes;
  const {name, address, id, serial, time} = props;

  return(
    <Paper className={ticketWrap}>
      <div className={ticket}>
        <img className={bg} src="https://i.ibb.co/hy78S6t/favicon.png" alt="" />
        <Typography className={`text-center ${bold}`} variant="h4">Pabnainfo</Typography>
        <Divider style={{height:2,backgroundColor:'#000'}} />
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={`${table} ${bold}`}>Name</TableCell>
              <TableCell className={table}>{ name }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${table} ${bold}`}>Location</TableCell>
              <TableCell className={table}>{ address }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${table} ${bold}`}>Order ID</TableCell>
              <TableCell className={table}>{ id }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${table} ${bold}`}>Job Serial</TableCell>
              <TableCell className={table}>{ serial }</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${table} ${bold}`}>Order Time</TableCell>
              <TableCell className={table}>{ time }</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
      <div className="pt-2 px-2 d-flex">
        <Typography variant="body2">
          Hotline: 01799008442
        </Typography>
        <Typography className="ml-auto" variant="body2">www.pabnainfo.com</Typography>
      </div>
    </Paper>
  )
}

export default TicketContent;