import React from 'react';
import { MenuItemContext } from './Contexts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { API_ROOT } from '../../config'


const MenuItemProvider = (props) => {
  const location = useLocation();
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/menu_items.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location])

  const rmMenuItem = id => {
    console.log(id)
  }

  const access = {
    menuItems: data,
    rmMenuItem: rmMenuItem
  }

  return (
    <MenuItemContext.Provider value={ access }>
      { props.children }
    </MenuItemContext.Provider>
  )
}

export default MenuItemProvider;