import React,{ useState } from 'react';
// import axios from 'axios';
import { PabnainfoContext } from './Contexts';



const Provider=(props)=> {
  const menuItems = [
    {id:1, name:'About', url:'/about'},
    {id:2, name:'FAQ', url:'/faq'},
    {id:3, name:'Contact', url:'/contact'},
    {id:4, name:'Worker', url:'/sp'},
    {id:5, name:'DashBoard', url:'/dashboard'},
    {id:6, name:'Ticket', url:'/ticket'}
  ]
  const users = [
    {id:1, name:'Sofiqul Islam',role:'Admin',avater:'//darunit.com/eop/images/1.jpg', about:'About text for Sofiqul Islam'},
    {id:2, name:'Jubaer Ahamad',role:'Admin',avater:'//darunit.com/eop/images/2.jpg', about:'About text for Jubaer Ahamad'},
    {id:3, name:'Samrat Nasir',role:'Member',avater:'//darunit.com/eop/images/3.jpg', about:'About text for Samrat Nasir'},
  ]
  const categories = [
    { id: 1, label: 'Doctor', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' },
    { id: 2, label: 'Ret-A-car', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' },
    { id: 3, label: 'Programmer', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' },
    { id: 4, label: 'Holeseller', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' },
    { id: 5, label: 'Pipe Line Cleaner', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' },
    { id: 6, label: 'Developer', avater:'s', thumb:'sd', about:'Voluptate consequat anim incididunt deserunt Voluptate consequat anim incididunt deserunt' }
  ]

  const experiences = [
    { id: 0, label: 'Experiences One' },
    { id: 1, label: 'Experiences Two' },
    { id: 2, label: 'Experiences three' },
    { id: 3, label: 'Experiences Four' },
    { id: 4, label: 'Experiences Five' }
  ]


  const orders = [
    {id:1, spID:1, name:'Sofiqul Islam', task:'Brain', phone:'01799008442', email:'schoolwab@gmail.com', location:'Pabna Sadar', age:25, gender:'male', serialNO:12, orderTime:1519999899400, status:'pending'},
    {id:2, spID:1, name:'Jubaer Ahmad', task:'Gastics', phone:'01799055402', email:'jubaer@gmail.com', location:'Pabna Sadar', age:20, gender:'male', serialNO:14, orderTime:1599129864400, status:'pending'}
  ]

  const serviceProviders = [
    {id:1, name:'Dr. Mujibur Rahman', catagory:'Doctor', skill:'Brain', degree:'pHD',avater:'//darunit.com/eop/images/1.jpg',about:'About is Nisi et exercitation enim occaecat laborum.'},
    {id:2, name:'Dr. Jubaer Ahmad', catagory:'Programmer', skill:'Brain', degree:'React JS',avater:'//darunit.com/eop/images/2.jpg',about:'About is Tempor nulla culpa sint Lorem nisi voluptate laborum ullamco anim nostrud id laboris tempor elit.'},
    {id:3, name:'Dr. Nirob Hasan', catagory:'Doctor', skill:'Brain', degree:'pHD',avater:'//darunit.com/eop/images/9.jpg',about:'About is Eu consequat duis ipsum qui minim excepteur.'}
  ]

  const companies = [
    {id:1, name:'Pabna Genaral Hospital', location:'Pabna Sadar', about:'Sort Discription of Pabna Genaral Hospital.', avater:'avater'},
    {id:1, name:'Darun IT', location:'Pabna Sadar', about:'Sort Discription of Darun IT', avater:'avater2'}
  ]
  
  const partners = [
    {id:1, name:'Darun IT', url:'www.darunit.com', logo:'https://i.ibb.co/njZs1cF/logo-square.png'},
    {id:2, name:'Google', url:'www.google.com', logo:'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'},
    {id:3, name:'Intel LLC', url:'www.intel.com', logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/165px-Intel-logo.svg.png'},
  ]

  const session = {
    selectCat: 'All',
    selectSP: 1,
    ticket:null,
  }


  const [data, setData] = useState({
    menuItems,
    users,
    categories,
    experiences,
    orders,
    serviceProviders,
    companies,
    partners,
    session,
  })
  


  const rmMenuItem = (id) => {
    const newData = data.menuItems.filter(menuItems=> id !== menuItems.id)
    setData({...data ,menuItems:newData});
  }

  const rmCategory = (id) => {
    const newData = data.categories.filter(categories=> id !== categories.id)
    setData({...data ,categories:newData});
  }

  const rmExperience = (id) => {
    const newData = data.experiences.filter(experiences=> id !== experiences.id)
    setData({...data ,experiences:newData});
  }

  const addOrder = (value) => {
    console.log(value);
    setData({
      ...data,
      orders: data.orders.push(value)
    })
  }

  const setSession = (key, value) => {
    setData({...data, session:{...data.session, [key]:value}})
  }

  const access = {
    menuItems: data.menuItems,
    rmMenuItem,

    users: data.users,

    categories: data.categories,
    rmCategory,

    experiences: data.experiences,
    rmExperience,

    orders: data.orders,
    addOrder,

    serviceProviders: data.serviceProviders,
    companies: data.companies,
    partners: data.partners,

    session: data.session,
    setSession,
  }

  return(
    <PabnainfoContext.Provider value={access} >
      { props.children }
    </PabnainfoContext.Provider>
  )
}

export default Provider;
