import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Container } from '@material-ui/core';

import { Phone, Favorite, PersonPin, Help, ShoppingBasket, ThumbDown, ThumbUp } from '@material-ui/icons';

//  import Tabs Components
import { Categories, Companies, Experience, MenuItems, Orders, ServiceProviders, Users } from '../dashboard/index';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="h4" color="secondary" className="my-5">
          Dashboard
        </Typography>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Orders" icon={<Phone />} {...a11yProps(0)} />
            <Tab label="Service Providers" icon={<Favorite />} {...a11yProps(1)} />
            <Tab label="Users" icon={<PersonPin />} {...a11yProps(2)} />
            <Tab label="Menu Items" icon={<Help />} {...a11yProps(3)} />
            <Tab label="Categories" icon={<ShoppingBasket />} {...a11yProps(4)} />
            <Tab label="Experiences" icon={<ThumbDown />} {...a11yProps(5)} />
            <Tab label="Companies" icon={<ThumbUp />} {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Orders />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ServiceProviders />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Users />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MenuItems />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Categories />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Experience />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Companies />
        </TabPanel>
      </Container>
    </div>
  );
}

export default DashBoard;