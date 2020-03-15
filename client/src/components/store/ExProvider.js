import React from 'react';
import { ExContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from "../../config";


const ExProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/experiences.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [])

  const access = {
    experiences : data
  }

  return (
    <ExContext.Provider value={ access }>
      { props.children }
    </ExContext.Provider>
  )
}

export default ExProvider;