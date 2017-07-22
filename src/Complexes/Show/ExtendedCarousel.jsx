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
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  height: 100%;
  background-color: rgba(17, 17, 17, .95);
  overflow: hidden;
  will-change: contents;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  will-change: contents;

  @media (min-height: 768px) {
    padding-top: 4rem;
  }
`;

const Item = styled.img`
  display: flex;
  max-height: 80vh;
  max-width: 80vw;
  will-change: contents;
`;

const Counter = styled.p`
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.38;
  padding: 0;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media (min-height: 768px) {
    margin-bottom: 54px;
  }
  @media (max-height: 500px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  @media (max-height: 332px) {
    display: none;
  }
`;

const modalWindowStyle = {
  position: 'absolute',
  overflow: 'hidden',
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
    const sideImageOffset = windowWidth > 768 ? '4rem' : '1rem';

    return {
      'transform-origin': 'center bottom',
      transform: getImageTransform(activeItemIdx, idx, sideImageOffset),
      'transition-duration': animationDuration,
      opacity: !idx ? 1.0 : 0.5,
    };
  }

  handleKeyDown = e => {
    e.stopPropagation();
    if (e.keyCode === 39) this.slide(e, false);
    if (e.keyCode === 37) this.slide(e, true);
    if (e.keyCode === 27) this.props.escHandler();
  };

  onClick = (e, idx) => {
    if (idx > 0) {
      this.slide(e, false);
    } else if (idx < 0) {
      this.slide(e, true);
    } else {
      e.stopPropagation();
    }
  };

  render() {
    const { items, width: windowWidth, height: windowHeight } = this.state;
    return (
      <RenderInBody style={modalWindowStyle}>
        <BodyClassName className="modal-opened">
          <Carousel
            onClick={e => {
              e.stopPropagation();
              this.props.escHandler();
            }}
          >
            <ItemsWrapper>
              {items.map(({ idx, image }) => {
                return (
                  <Item
                    key={image.id}
                    style={this.getItemTransformation(idx)}
                    src={getImageUrl(image.id, 1024)}
                    onClick={e => this.onClick(e, idx)}
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
