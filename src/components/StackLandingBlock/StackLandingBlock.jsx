import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import logo1 from '../../assets/fastapi.png';
import logo2 from '../../assets/react.png';
import './StackLandingBlock.styles.css';

const frameworks = [
  {
    link: "https://github.com/tiangolo/fastapi",
    image: logo1
  },
  {
    link: "https://github.com/facebook/react",
    image: logo2
  },
];

const StackLandingBlock = (props) => (
  <div className="StackLandingBlockWrapper">
    <Container>
      <Typography variant="h4" color="primary.light" style={{fontWeight: 500}}>Stack</Typography>
      <br/>
      <Typography variant="body1" color="secondary.light">Service generates app with backend and frontend using optimal and popular frameworks for competitions.</Typography>
      <div className="stack-container">
        {
          frameworks.map((hackaton, idx) => (
            <div key={idx} className="competitions-item">
              <Link href={hackaton.link}>
                <img className="framework-img" src={hackaton.image} alt="loading..." />
              </Link>
            </div>
          ))
        }
      </div>
    </Container>
  </div>
);

export default StackLandingBlock;
