import React,{ useState } from 'react';
// import axios from 'axios';
import { PabnainfoContext } from './Contexts';



const Provider=(props)=> {
  const menuItems = [
    {id:1, name:'About', url:'/about'},
    {id:2, name:'FAQ', url:'/faq'},
    {id:3, name:'Contact', url:'/contact'},
    {id:4, name:'Worker', url:'/sp'},
    {id:5, name:'DashBoard', url:'/dashboard'}
  ]
  const users = [
    {id:1, name:'Sofiqul Islam',role:'Admin',avater:'//darunit.com/eop/images/1.jpg'},
    {id:2, name:'Jubaer Ahamad',role:'Admin',avater:'//darunit.com/eop/images/2.jpg'},
    {id:3, name:'Samrat Nasir',role:'Member',avater:'//darunit.com/eop/images/3.jpg'},
  ]
  const categories = [
    { id: 1, label: 'Doctors' },
    { id: 2, label: 'Ret-A-car' },
    { id: 3, label: 'Holeseller' },
    { id: 4, label: 'Pipe Line Cleaner' },
    { id: 5, label: 'Developer' },
    { id: 6, label: 'Add New' }
  ]

  const experiences = [
    { id: 0, label: 'Experiences One' },
    { id: 1, label: 'Experiences Two' },
    { id: 2, label: 'Experiences three' },
    { id: 3, label: 'Experiences Four' },
    { id: 4, label: 'Experiences Five' },
    { id: 5, label: 'Add New' },
  ]
  
  const [data, setData] = useState({
    menuItems,
    users,
    categories,
    experiences,
  })
  

  const rmMenuItem = (id) => {
    const newData = data.menuItems.filter(menuItems=> id !== menuItems.id)
    setData({...data ,menuItems:newData});
  }

  const rmCategorie = (id) => {
    const newData = data.categories.filter(categories=> id !== categories.id)
    setData({...data ,categories:newData});
  }

  const rmExperience = (id) => {
    const newData = data.experiences.filter(experiences=> id !== experiences.id)
    setData({...data ,experiences:newData});
  }

  const access = {
    menuItems: data.menuItems,
    rmMenuItem,

    users: data.users,

    categories: data.categories,
    rmCategorie,

    experiences: data.experiences,
    rmExperience,

    
  }

  return(
    <PabnainfoContext.Provider value={access} >
      { props.children }
    </PabnainfoContext.Provider>
  )
}

export default Provider;
