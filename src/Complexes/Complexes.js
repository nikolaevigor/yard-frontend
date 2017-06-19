import React, {Component} from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import BodyClassName from 'react-body-classname';

import CompassDevelopmentBlock from './CompassDevelopmentBlock'
import Intro from './Intro'
import Cards from './Cards'

class Complex extends Component {

  render() {
    return (
      <div>
        <CompassDevelopmentBlock />
        <Intro />
        <Cards />
      </div>
    );
  }
}

export default Complex;
