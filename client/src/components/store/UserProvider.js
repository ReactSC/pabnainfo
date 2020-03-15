import React from 'react';
import { UserContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from '../../config';


const UserProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/users.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])

  const access = {
    users : data
  }

  return (
    <UserContext.Provider value={ access }>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserProvider;