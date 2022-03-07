import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import './Footer.styles.css';

const Footer = (props) => (
  <div className="FooterWrapper">
    <Container>
      <Typography variant="body1">Support: <Link href="mailto:starlei165@gmail.com">starlei165@gmail.com</Link> </Typography>
    </Container>
  </div>
);

export default Footer;
