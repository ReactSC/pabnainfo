import React from 'react';
import { OrderContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from '../../config';


const OrderProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/orders.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])

  const access = {
    orders : data
  }

  return (
    <OrderContext.Provider value={ access }>
      { props.children }
    </OrderContext.Provider>
  )
}

export default OrderProvider;