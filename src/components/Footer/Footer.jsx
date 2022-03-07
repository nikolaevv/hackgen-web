import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import './Footer.styles.css';

import githubButton from '../../assets/github.png'

const Footer = (props) => (
  <div className="FooterWrapper">
    <Container>
      <Link href="https://github.com/nikolaevv/hackgen">
        <img className="github-btn" src={githubButton} alt="github"/>
      </Link>
      <Typography variant="body1">Support: <Link href="mailto:starlei165@gmail.com">starlei165@gmail.com</Link> </Typography>
    </Container>
  </div>
);

export default Footer;
