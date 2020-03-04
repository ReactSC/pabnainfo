import React, { Fragment, useContext } from 'react';
import { SingleList1 } from './ServiceProviders';
import { PabnainfoContext } from '../store/Contexts';

// Final Render
const Users = () => {
  const users = useContext(PabnainfoContext).users;

  return(
    <Fragment>
      {users.map(user=> (
        <SingleList1
          key       = { user.id }
          id        = { user.id }
          name      = { user.name }
          role      = { user.role }
          avater    = { user.avater }
          about     = { user.about }
        />
      ))}
    </Fragment>
  )
}

export default Users;