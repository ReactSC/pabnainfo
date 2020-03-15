import React from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryContext } from './Contexts';
import axios from 'axios';
import { API_ROOT } from "../../config";

const CategoryProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState()


  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/categories.php")
      .then(x => x.json())
      .then(y => {
        setData( y )
      });
  }, [location]);
  
  const addCategory = data => {
    axios.post(API_ROOT+'/pabnainfo/api/add/category.php', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: {label:"Dinesh", avater:"akjasbd", discription: "Discription"}
    })
  }

  


  const rmCategory = id => {
    console.log(id)
  }

  const access = {
    categories: data,
    addCategory,
    rmCategory,
  }

  return (
    <CategoryContext.Provider value={ access }>
      { props.children }
    </CategoryContext.Provider>
  )
}

export default CategoryProvider;