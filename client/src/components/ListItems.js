import React from 'react';

import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';


const ListItems = props => {

  return(
    <div>
      <Divider />
      <List>
        <ListItem style={{background:"#fff"}}>

          {/* List Item Avater */}
          <ListItemAvatar>
            <Avatar 
            alt="Aindy Baker"
            style={{border:'1px solid #ccc'}}
            />
          </ListItemAvatar>

          <ListItemText
            primary = "Sofiqul Islam is a good Developer"
            secondary = {
              <React.Fragment>
              <Typography variant="body2" component="span">
                Sofiqul Islam
              </Typography>
              {" -- The current course is handed over to this component via the course parameter."}
            </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" /> 

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

    </div>
  )
}

export default ListItems;