import React, { Fragment, useContext } from 'react';

import { SingleList1 } from './ServiceProviders';
import { PabnainfoContext } from '../store/Contexts';

// Final Render
const Companies = () => {
  const context = useContext(PabnainfoContext);
  const companies = context.companies;
  return(
    <Fragment>
      {companies.map(company => (
        <SingleList1 
          name        = {company.name}
          location    = {company.location}
          avater      = {company.avater}
          about       = {company.about}
        />
      ))}
    </Fragment>
  )
}

export default Companies;