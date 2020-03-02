import React, { useContext, Fragment } from 'react';
// import { PabnainfoContext } from './store/Contexts';
import Hero from '../home/Hero';
import Categories from '../home/Categories';
import CardSection from '../home/CardSection';
import Testimonial from '../home/Testimonial';
import CardSection2 from '../home/CardSection2';
import Partners from '../home/Partners';

import '../App.css';



const Home = () => {
  document.title='Pabnainfo';
  
  return (
    <Fragment>
      <Hero /> 
      <Categories />
      <CardSection />
      <Testimonial />
      <CardSection2 />
      <Partners />
    </Fragment>
  );
}

export default Home;
