import React from 'react';
import Footer from '../../components/Footer/Footer';
import MainLandingBlock from '../../components/MainLandingBlock/MainLandingBlock';
import PartnersLandingBlock from '../../components/PartnersLandingBlock/PartnersLandingBlock';
import StackLandingBlock from '../../components/StackLandingBlock/StackLandingBlock';

import './LandingPage.styles.css';

const LandingPage = (props) => (
  <div>
    <MainLandingBlock/>
    <PartnersLandingBlock/>
    <StackLandingBlock/>
    <Footer/>
  </div>
);

export default LandingPage;
