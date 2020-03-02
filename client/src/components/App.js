import React, { useContext, Fragment } from 'react';
// import { PabnainfoContext } from './store/Contexts';
import Navbar from './main/Navbar';
import Home from './pages/Home';

import Footer from './main/Footer';

import './App.css';



const App = () => {
  // const hello = useContext(PabnainfoContext);
  // console.log(hello)
  document.title='Pabnainfo';
  
  return (
    <Fragment>
      <Navbar />
      <Home />
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
