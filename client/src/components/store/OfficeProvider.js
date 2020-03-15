import React from 'react';
import { OfficeContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from '../../config';


const OfficeProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/offices.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])

  const access = {
    offices : data
  }

  return (
    <OfficeContext.Provider value={ access }>
      { props.children }
    </OfficeContext.Provider>
  )
}

export default OfficeProvider;