import React, { Fragment, useContext } from 'react';
import { PabnainfoContext } from './store/Contexts';
import { Route, Switch } from 'react-router-dom';

import Navbar from './main/Navbar';
import Footer from './main/Footer';

// import Pages
import Home from './pages/Home';
import ServiceProvider from './pages/ServiceProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import DashBoard from './pages/Dashboard';
import Categories from './pages/Categories';
import Order from './pages/Order';
import Ticket from './pages/Ticket';
import NotFound from './NotFound';


import './App.css';



const App = () => {
  const context = useContext(PabnainfoContext);
  document.title='Pabna Info';

  return (
    <Fragment>
      <Navbar />
      <Switch>

      <Route path="/ticket/:id" component={ Ticket } />
      <Route path="/ticket" component={ Ticket } />
      <Route path="/categories" component={ Categories } />
      <Route path="/dashboard" component={ DashBoard } />
      <Route path="/faq" component={ FAQ } />
      <Route path="/contact" component={ Contact } />
      <Route path="/about" component={ About } />
      <Route path="/order" component={ Order } />
      <Route path="/sp" component={ ServiceProvider } />
      <Route path="/" exact component={ Home } />
      <Route component={ NotFound } />

      </Switch>
      <Footer />
        
    </Fragment>
  );
}

export default App;
