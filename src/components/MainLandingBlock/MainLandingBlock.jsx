import { Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import Button from '@mui/material/Button';

import './MainLandingBlock.styles.css';

import gif from '../../assets/win.png'

const text = "Get Started >";

const MainLandingBlock = (props) => ( 
  <Container>
    <div className="main-block">
      <div>
        <Typography variant="h2" color="primary" style={{fontWeight: 500}}>
        HackGen
        </Typography>
        <br/>
        <Typography variant="h4">
          The open-source code generator that will boost your work
        </Typography>
        <br/><br/>
        <Link href="/app/create/1">
          <Button variant="contained" size="large">{text}</Button>
        </Link>
      </div>

      <div>
        <div>
          <img className="coding-img" src={gif} alt="loading..." />
        </div>
      </div>
    </div>
  </Container>
);

export default MainLandingBlock;
