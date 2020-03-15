import React from 'react';
import { SpContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from '../../config';


const SpProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/service_provider.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])
  
  const addSP = data => {
    // const { name, gender, phone, email, category, subCategory, addTime, addedBy } = data;
    axios.post(API_ROOT+'/pabnainfo/api/add/service_provider.php', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data
    })
  }

  const access = {
    sp: data,
    addSP
  }

  return (
    <SpContext.Provider value={ access }>
      { props.children }
    </SpContext.Provider>
  )
}

export default SpProvider;