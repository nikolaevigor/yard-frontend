import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import RenderInBody from '../../components/RenderInBody';

const Carousel = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17,17,17,.95);
`;

const ActiveItem = styled.img`
  width: 948px;
  height: 606px;
  background-color: red;
`;

const Item = styled.img`
  width: 182px;
  height: 505px;
  background-color: blue;
`;

const Counter = styled.p`
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
  margin-bottom: 54px;
  padding: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 64px;
`;

const stopPropagation = (e) => {
  e.stopPropagation();
};

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
};

/* eslint-disable */
class ExtendedCarousel extends Component {
  render() {
    return (
      <RenderInBody style={style}>
        <BodyClassName className="carousel">
          <Carousel onClick={this.props.escHandler}>
            <Wrapper>
              <Item onClick={stopPropagation} />
              <ActiveItem onClick={stopPropagation} />
              <Item onClick={stopPropagation} />
            </Wrapper>
            <Counter>4/5 Главный Фасад</Counter>
          </Carousel>
        </BodyClassName>
      </RenderInBody>
    );
  }
}

export default ExtendedCarousel;
