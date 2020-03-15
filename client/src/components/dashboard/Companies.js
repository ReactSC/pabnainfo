import React, { Fragment, useContext } from 'react';

import { SingleList1 } from './ServiceProviders';
import { OfficeContext } from '../store/Contexts';

// Final Render
const Companies = () => {
  const offices = useContext(OfficeContext).offices;

  return(
    <Fragment>
      {offices.map((office, index) => (
        <SingleList1 
          key= {index}
          name={office.name}
          location={office.location}
          avater={office.thumb}
          about={office.about}
        />
      ))}
    </Fragment>
  )
}

export default Companies;