import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import Provider from './components/store/PabnainfoProvider';
import ScrollToTop from './components/ScrollToTop'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.register();
