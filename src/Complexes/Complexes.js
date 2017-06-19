import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import CompassDevelopmentBlock from './CompassDevelopmentBlock'
import Intro from './Intro'
import Cards from './Cards'

export default () => {
  return (
    <div>
      <CompassDevelopmentBlock />
      <Intro />
      <Cards />
    </div>
  );
};
