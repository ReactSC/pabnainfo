import React from 'react';
import { CustomerContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from "../../config";

const CustomerProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/customers.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])

  const access = {
    customers : data
  }

  return (
    <CustomerContext.Provider value={ access }>
      { props.children }
    </CustomerContext.Provider>
  )
}

export default CustomerProvider;