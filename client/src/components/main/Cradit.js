import React from 'react';
import { Container,Toolbar, Typography, Link } from '@material-ui/core'

const Cradit = () => {

  return(
    <div>
      <Container>
        <Toolbar>
          <Typography>
            Powerd By: 
            <Link href="#">
              Darun IT
            </Link>
          </Typography>
      </Toolbar>
      </Container>
    </div>
  )
}
export default Cradit;