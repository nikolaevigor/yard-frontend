import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import RenderInBody from '../../components/RenderInBody';

import { getImageUrl } from '../../utils';

const Carousel = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, .95);
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 4rem;
  width: 100%;
  height: 100%;
`;

const Item = styled.img`width: 100%;`;

const Counter = styled.p`
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
  margin-bottom: 54px;
  padding: 0;
`;

const modalWindowStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
};

const animationDuration = '0.25s';

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
      offset: 0,
    };
  }

  slide = (e, direction) => {
    e.stopPropagation();
    const { items, activeItem, offset } = this.state;
    const idxDelta = direction ? 1 : -1;
    this.setState({
      items: items.map(({ idx, imageId }) => {
        return { idx: idx + idxDelta, imageId: imageId };
      }),
      activeItem: activeItem - idxDelta,
      offset: offset + idxDelta,
    });
  };

  getWrapperTransformation(idx) {
    const { offset } = this.state;

    if (idx > 0) {
      return {
        'transform-origin': 'center bottom',
        transform: `translateX(calc(${offset * 100}% + 4rem + 50vw - 50% )) scaleY(0.83)`,
        'transition-duration': animationDuration,
        'max-width': '1024px',
      };
    } else if (idx === 0) {
      return {
        'transform-origin': 'center bottom',
        transform: `translateX(calc(${offset * 100}% + 50vw - 50% ))`,
        'transition-duration': animationDuration,
        'max-width': '1024px',
      };
    } else {
      return {
        'transform-origin': 'center bottom',
        transform: `translateX(calc(${offset * 100}% - 4rem + 50vw - 50% )) scaleY(0.83)`,
        'transition-duration': animationDuration,
        'max-width': '1024px',
      };
    }
  }

  render() {
    return (
      <RenderInBody style={modalWindowStyle}>
        <BodyClassName className="modal-opened">
          <Carousel onClick={this.props.escHandler}>
            <ItemsWrapper>
              {this.state.items.map(({ idx, imageId }) => {
                return (
                  <Item
                    style={this.getWrapperTransformation(idx)}
                    src={getImageUrl(imageId, 1024)}
                    onClick={e => {
                      if (idx > 0) {
                        this.slide(e, false);
                      } else if (idx < 0) {
                        this.slide(e, true);
                      } else {
                        e.stopPropagation();
                      }
                    }}
                  />
                );
              })}
            </ItemsWrapper>
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
