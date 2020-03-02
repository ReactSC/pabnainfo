import React, { Fragment } from 'react';
// import { PabnainfoContext } from './store/Contexts';
import { Route, Switch } from 'react-router-dom';

import Navbar from './main/Navbar';
import Footer from './main/Footer';

// import Pages
import Home from './pages/Home';
import ServiceProvider from './pages/ServiceProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import DashBoard from './pages/Dashboard'


import './App.css';



const App = () => {
  // const hello = useContext(PabnainfoContext);
  // console.log(hello)
  document.title='Pabna Info';
  // const root = '/pabnainfo';

  return (
    <Fragment>
      <Navbar />
      <Switch>

      <Route path="/dashboard" component={ DashBoard } />
      <Route path="/faq" component={ FAQ } />
      <Route path="/contact" component={ Contact } />
      <Route path="/about" component={ About } />
      <Route path="/sp" component={ ServiceProvider } />
      <Route path="/" exact component={ Home } />
      <Route component={ Home } />

      </Switch>
      <Footer />
        

        {/* <div className="container">
          <h1 className="display-4 text-light">Welcome</h1>
          <div className="text-light">{hello.hei.map(h=>{
            return(
              <li className="list">{h}</li>
              )
            })}</div>
          </div>
      </div> */}
    </Fragment>
  );
}

export default App;
