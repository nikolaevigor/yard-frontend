import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

const Carousel = styled.div`
  display: flex;
  position: absolute;
  top: 0; right: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;

const ActiveItem = styled.img`
  width: 948px;
  height: 606px;
`;

const Item = styled.img`
  width: 182px;
  height: 505px;
`;

const Counter = styled.p`
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
`;

class ExtendedCarousel extends Component {
  render() {
    return (
      <BodyClassName className="carousel">
        <Carousel />
      </BodyClassName>
    );
  }
}

export default ExtendedCarousel;
