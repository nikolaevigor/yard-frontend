// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import RenderInBody from '../../components/RenderInBody';

import { getImageUrl, media } from '../../utils';

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

  ${media.fromSmHeight`
    ${media.fromSm`
      padding-top: 4rem;
    `};
  `};
`;

const Item = styled.img`
  display: flex;
  max-height: 80vh;
  max-width: 80vw;
  will-change: contents;
  cursor: pointer;
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

  ${media.fromSmHeight`
    ${media.fromSm`
      margin-bottom: 54px;
    `};
  `};
`;

const modalWindowStyle = {
  position: 'absolute',
  overflow: 'hidden',
  top: 0,
  left: 0,
};

const animationDuration = 0.25;

function getImageTransform(activeItemIdx, idx) {
  const sideImageOffset = window.innerWidth > 768 ? '4rem' : '1rem';

  if (idx > 0) {
    return `translateX(calc(${-activeItemIdx *
      100}% + ${sideImageOffset} + 50vw - 50% )) scaleY(0.83)`;
  } else if (!idx) {
    return `translateX(calc(${-activeItemIdx * 100}% + 50vw - 50% ))`;
  }
  return `translateX(calc(${-activeItemIdx *
    100}% - ${sideImageOffset} + 50vw - 50% )) scaleY(0.83)`;
}

type ImageType = {
  height: number,
  width: number,
  id: string,
};

type ItemType = {
  idx: number,
  image: ImageType,
};

type PropsType = {
  children: Array<ImageType>,
  activeItemIdx: number,
  escHandler: (idx?: number) => void,
};

type StateType = {
  items: Array<ItemType>,
  activeItemIdx: number,
};

class ExtendedCarousel extends Component {
  constructor(props: PropsType) {
    super(props);
    const { children = [], activeItemIdx } = props;
    const initialIdxs = children.map((item, idx) => idx - activeItemIdx);

    this.state = {
      items: children.map((item, idx) => ({ idx: initialIdxs[idx], image: children[idx] })),
      activeItemIdx: activeItemIdx || 0,
    };
  }

  state: StateType;

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // eslint-disable-next-line
  onCarouselClick = (e: SyntheticInputEvent) => {
    e.stopPropagation();
    const { escHandler = null } = this.props;
    if (escHandler) {
      this.props.escHandler();
    }
  };

  // eslint-disable-next-line
  onItemClick = (e: SyntheticInputEvent, idx: number) => {
    e.stopPropagation();
    if (idx > 0) {
      this.slide(e, false);
    } else if (idx < 0) {
      this.slide(e, true);
    }
  };

  getItemTransformation(idx: number) {
    const { activeItemIdx } = this.state;

    return {
      'transform-origin': 'center bottom',
      transform: getImageTransform(activeItemIdx, idx),
      'transition-duration': `${animationDuration}s`,
      opacity: !idx ? 1.0 : 0.5,
    };
  }

  // eslint-disable-next-line
  slide = (e: SyntheticInputEvent, isRight: boolean) => {
    const { items, activeItemIdx } = this.state;
    const idxDelta = isRight ? 1 : -1;
    const newActiveItemIdx =
      activeItemIdx - idxDelta < 0 ? items.length - 1 : (activeItemIdx - idxDelta) % items.length;
    const newIdxs = items.map((item, idx) => idx - newActiveItemIdx);
    const updatedItems = items.map(({ image }, idx) => ({ idx: newIdxs[idx], image }));

    this.setState({
      items: updatedItems,
      activeItemIdx: newActiveItemIdx,
    });
  };

  // eslint-disable-next-line
  handleKeyDown = (e: SyntheticInputEvent) => {
    if (e.keyCode === 39) this.slide(e, false);
    if (e.keyCode === 37) this.slide(e, true);
    if (e.keyCode === 27) this.props.escHandler();
  };

  render() {
    const { items } = this.state;
    return (
      <RenderInBody style={modalWindowStyle}>
        <BodyClassName className="modal-opened">
          <Carousel onClick={this.onCarouselClick}>
            <ItemsWrapper>
              {items.map(({ idx, image }) =>
                (<Item
                  key={image.id}
                  style={this.getItemTransformation(idx)}
                  src={getImageUrl(image.id, 1024)}
                  onClick={e => this.onItemClick(e, idx)}
                />),
              )}
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
