import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import RenderInBody from '../../components/RenderInBody';

import { getImageUrl } from '../../utils';

const Carousel = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, .95);
`;

const Item = styled.img`
  width: 790px;
  height: 505px;
  position: fixed;
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
  height: 100%;
  margin-top: 64px;
  align-items: center;
`;

const modalWindowStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
};

function getTranformation(idx) {
  if (idx > 0) {
    return {
      transform: `translate3d( calc(50vw - 474px + ${idx * 75}vw), 0px, 0px)`,
      'transition-duration': '1s',
    };
  } else if (idx === 0) {
    return {
      transform: `translate3d( calc(50vw - 474px + ${idx * 75}vw), 0px, 0px)`,
      'transition-duration': '1s',
      width: 948,
      height: 606,
    };
  }
  return {
    // в левую сторону надо двигать на меньшее расстояние так как отсчет от увеличенной картинки
    // 316 === 474 - (474 - 395)*2
    transform: `translate3d( calc(50vw - 316px + ${idx * 75}vw), 0px, 0px)`,
    'transition-duration': '1s',
  };
}

/* eslint-disable */
class ExtendedCarousel extends Component {
  constructor(props) {
    super(props);
    const { children } = props;
    this.state = {
      items: [...Array(children.length).keys()].map(i => {
        return { idx: i, imageId: children[i] };
      }),
      activeItem: 1,
    };
  }

  slide = (e, direction) => {
    e.stopPropagation();
    const { items, activeItem } = this.state;
    const idxDelta = direction ? 1 : -1;
    this.setState({
      items: items.map(({ idx, imageId }) => {
        return { idx: idx + idxDelta, imageId: imageId };
      }),
      activeItem: activeItem - idxDelta,
    });
  };

  render() {
    return (
      <RenderInBody style={modalWindowStyle}>
        <BodyClassName className="carousel">
          <Carousel onClick={this.props.escHandler}>
            <Wrapper>
              {this.state.items.map(item => {
                return (
                  <Item
                    src={getImageUrl(item.imageId)}
                    style={getTranformation(item.idx)}
                    onClick={e => {
                      if (item.idx > 0) {
                        this.slide(e, false);
                      } else if (item.idx < 0) {
                        this.slide(e, true);
                      } else {
                        e.stopPropagation();
                      }
                    }}
                  />
                );
              })}
            </Wrapper>
            <Counter>
              {`${this.state.activeItem}/${this.state.items.length} Главный Фасад`}
            </Counter>
          </Carousel>
        </BodyClassName>
      </RenderInBody>
    );
  }
}

export default ExtendedCarousel;
