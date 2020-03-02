import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { PabnainfoContext } from './Contexts';



const Provider=(props)=> {
  const hello = {
    hei:["Amar", "Sonar", "Bangla"]
  }
  const [sp, setSp] = useState(null)

  return(
    <PabnainfoContext.Provider value={hello} >
      { props.children }
    </PabnainfoContext.Provider>
  )
}

export default Provider;
