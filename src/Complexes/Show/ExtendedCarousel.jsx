import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import RenderInBody from '../../components/RenderInBody';

import { getImageUrl } from '../../utils';

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, .95);
  overflow: hidden;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media (min-height: 600px) {
    padding-top: 4rem;
  }
`;

const Item = styled.img`
  display: flex;
  max-height: 100%;
  max-width: 80%;
`;

const Counter = styled.p`
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
  padding: 0;

  @media (min-height: 600px) {
    margin-bottom: 54px;
  }
`;

const modalWindowStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
};

const animationDuration = '0.25s';

function getImageTransform(activeItemIdx, idx, sideImageOffset = '4rem') {
  if (idx > 0) {
    return `translateX(calc(${-activeItemIdx *
      100}% + ${sideImageOffset} + 50vw - 50% )) scaleY(0.83)`;
  } else if (!idx) {
    return `translateX(calc(${-activeItemIdx * 100}% + 50vw - 50% ))`;
  }
  return `translateX(calc(${-activeItemIdx *
    100}% - ${sideImageOffset} + 50vw - 50% )) scaleY(0.83)`;
}

/* eslint-disable */
class ExtendedCarousel extends Component {
  constructor(props) {
    super(props);
    const { children, activeItemIdx } = props;
    const initialIdxs = [...Array(children.length).keys()].map(idx => idx - activeItemIdx);

    this.state = {
      items: [...Array(children.length).keys()].map(idx => {
        return { idx: initialIdxs[idx], image: children[idx] };
      }),
      activeItemIdx: activeItemIdx || 0,
      width: '0',
      height: '0',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  slide = (e, direction) => {
    e.stopPropagation();
    const { items, activeItemIdx } = this.state;
    const idxDelta = direction ? 1 : -1;
    const newActiveItemIdx =
      activeItemIdx - idxDelta < 0 ? items.length - 1 : (activeItemIdx - idxDelta) % items.length;
    const newIdxs = [...Array(items.length).keys()].map(idx => idx - newActiveItemIdx);
    const updatedItems = items.map(({ image }, idx) => {
      return { idx: newIdxs[idx], image: image };
    });

    this.setState({
      items: updatedItems,
      activeItemIdx: newActiveItemIdx,
    });
  };

  getItemTransformation(idx) {
    const { items, activeItemIdx, width: windowWidth, height: windowHeight } = this.state;
    const { image } = items[activeItemIdx];
    const { width, height } = image;
    const aspectRatio = width / height;
    const sideImageOffset = windowWidth > 768 ? '4rem' : '1rem';

    let elementWidth, elementHeight;
    if (windowWidth >= aspectRatio * windowHeight) {
      elementHeight = 0.7 * windowHeight;
      elementWidth = aspectRatio * elementHeight;
    } else {
      elementWidth = 0.7 * windowWidth;
      elementHeight = elementWidth / aspectRatio;
    }

    return {
      'transform-origin': 'center bottom',
      transform: getImageTransform(activeItemIdx, idx, sideImageOffset),
      'transition-duration': animationDuration,
      'max-height': '100%',
      width: elementWidth,
      height: elementHeight,
    };
  }

  handleKeyDown = e => {
    e.stopPropagation();
    if (e.keyCode === 39) this.slide(e, false);
    if (e.keyCode === 37) this.slide(e, true);
    if (e.keyCode === 27) this.props.escHandler();
  };

  render() {
    const { items } = this.state;

    return (
      <RenderInBody style={modalWindowStyle}>
        <BodyClassName className="modal-opened">
          <Carousel
            onClick={e => {
              e.stopPropagation(), this.props.escHandler();
            }}
          >
            <ItemsWrapper>
              {items.map(({ idx, image }) => {
                return (
                  <Item
                    key={image.id}
                    style={this.getItemTransformation(idx)}
                    src={getImageUrl(image.id, 1024)}
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
              {`${(this.state.activeItemIdx + 1) % (this.state.items.length + 1)}/${this.state.items
                .length} Главный Фасад`}
            </Counter>
          </Carousel>
        </BodyClassName>
      </RenderInBody>
    );
  }
}

export default ExtendedCarousel;
