import React, { useContext, Fragment } from 'react';
// import { PabnainfoContext } from './store/Contexts';
import Navbar from './main/Navbar';
import Hero from './sections/Hero';
import Categories from './sections/Categories';
import CardSection from './sections/CardSection';
import Testimonial from './sections/Testimonial';
import CardSection2 from './sections/CardSection2';
import Partners from './sections/Partners';
import Footer from './main/Footer';
import Cradit from './main/Cradit';

import './App.css';



const App = () => {
  // const hello = useContext(PabnainfoContext);
  // console.log(hello)
  document.title='Pabnainfo';
  
  return (
    <Fragment>
      
      {/* <div className="bg-dark"> */}
      <Navbar />
      <Hero /> 
      <Categories />
      <CardSection />
      <Testimonial />
      <CardSection2 />
      <Partners />
      <Footer />
      <Cradit />
        

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
