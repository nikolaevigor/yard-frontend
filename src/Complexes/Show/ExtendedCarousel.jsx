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

const Item = styled.img`
  justify-content: center;
  align-items: stretch;
  flex: 1 0;
  margin-left: 6rem;
  margin-right: 6rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 100%;
  height: 100%;
  z-index: 100;
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

const ItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 64px;
  align-items: flex-end;
  justify-content: flex-start;
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
      offset: offset - idxDelta * 100,
    });
  };

  getWrapperTransformation(idx) {
    const { offset } = this.state;
    if (idx > 0) {
      return {
        transform: `translate3d(calc(-2rem - ${offset}%), 0, 0)`,
        'transition-duration': animationDuration,
        height: '80%',
      };
    } else if (idx === 0) {
      return {
        transform: `translate3d(${-offset}%, 0px, 0px)`,
        'transition-duration': animationDuration,
        height: '100%',
        'z-index': 0,
      };
    } else {
      return {
        transform: `translate3d(calc(2rem - ${offset}%), 0, 0)`,
        'transition-duration': animationDuration,
        height: '80%',
      };
    }
  }

  getItemTransformation(idx) {
    if (idx !== 0) {
      return {
        'justify-content': 'center',
        'align-items': 'stretch',
        flex: '1 0',
        'margin-left': '0',
        'margin-right': '0',
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
                  <ItemWrapper style={this.getWrapperTransformation(idx)}>
                    <Item
                      style={this.getItemTransformation(idx)}
                      src={getImageUrl(imageId)}
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
                  </ItemWrapper>
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
