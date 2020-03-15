import React, { useState, useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Chip,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
  Grid,
  IconButton
} from "@material-ui/core";
import { StarBorder, Add, ExpandLess, ExpandMore, Delete } from "@material-ui/icons";

import { CategoryContext, SubCategoryContext } from "../store/Contexts";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5)
  },
  list: {
    width: "100%",
    width: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background: "#ff00ff33"
  }
}));

const Categories = () =>{
  const contexts = useContext(CategoryContext);
  const categories = contexts.categories;
  const subCategories = useContext(SubCategoryContext).subCategories;

  const classes = useStyles();


  const handleDelete = id => {
    contexts.rmCategory(id)
  };

  const addNewHandle = () => {
    contexts.addCategory()
    // alert('Add New')
  }


  return (
    <Paper className={classes.root}>
      <Grid>
        {categories.map(data => {
          const subCat = subCategories.find(
            subCat => Number(subCat.cat_id) === Number(data.id)
            );
          return (
            <SinglCatList
              key={data.id}
              label={data.label}
              id={data.id}
              subCat={subCat}
            />
          );
          })}
        <Chip
          icon={<Add />}
          label="Add New"
          onClick={addNewHandle}
          />
      </Grid>
    </Paper>
  );
}

export default Categories;




const SinglCatList = props => {
  const contexts = useContext(CategoryContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { subCat, id, label } = props;
  
  const handleDelete = id => {
    contexts.rmCategory(id);
  };

  const handleClick = () => {
    setOpen(!open)
  }


  return (
    <Fragment>
      <Grid item xs={6} md={3}>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemAvatar>
              <Avatar src="s" alt={label} />
            </ListItemAvatar>
            <ListItemText primary={label} />

            <IconButton size="small" onClick={() => handleDelete(id)}>
              <Delete />
            </IconButton>

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={subCat && subCat.label} />
            </ListItem>
          </List>
        </Collapse>
      </Grid>
    </Fragment>
  );
}