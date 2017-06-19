import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import CompassDevelopmentBlock from './CompassDevelopmentBlock'
import Intro from './Intro'
import Cards from './Cards'

const ComplexesBody = styled.div`
  background: url("./img/background.png");
  background-size: 1%;
  background-color: #eaebf0;
  background-repeat: repeat;
`;

export default () => {
  return (
    <div>
      <Header />
      <ComplexesBody>
        <CompassDevelopmentBlock />
        <Intro />
        <Cards />
      </ComplexesBody>
      <Footer />
    </div>
  );
};
