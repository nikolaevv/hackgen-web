import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import logo1 from '../../assets/cp.svg';
import logo2 from '../../assets/uni-dubna.png';
import logo3 from '../../assets/vk.png';
import logo4 from '../../assets/tf.webp';
import logo5 from '../../assets/vtb.png';

import './PartnersLandingBlock.styles.css';

const hackatons = [
  {
    link: "https://leadersofdigital.ru/",
    image: logo1
  },
  {
    link: "https://vk.com/dubnatech",
    image: logo2
  },
  {
    link: "https://vk.com/hackathon",
    image: logo3
  },
  {
    link: "https://tfalliance.ru/",
    image: logo4
  },
  {
    link: "https://moretech.vtb.ru/",
    image: logo5
  },
];

const PartnersLandingBlock = (props) => (
  <div className="PartnersLandingBlockWrapper">
    <Container className="PartnersLandingBlock">
      <Typography variant="h4" style={{fontWeight: 500}}>Competitions</Typography>
      <br/>
      <Typography variant="body1" color="primary.info">Tested by participants of popular hackatons & cups</Typography>
      <div className="competitions-container">
        {
          hackatons.map((hackaton, idx) => (
            <div key={idx} className="competitions-item">
              <Link href={hackaton.link}>
                <img className="partner-img" src={hackaton.image} alt="loading..." />
              </Link>
            </div>
          ))
        }
      </div>
    </Container>
  </div>
);

export default PartnersLandingBlock;
