// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import ExtendedCarousel from './ExtendedCarousel';
import Pluralizer from '../../components/Pluralizer';
import { getImageUrl } from '../../utils';

const Images = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: scroll;
`;

const Image = styled.img`
  height: 400px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  margin-top: -42px;
  border-radius: 2px;
  border: 0;
  background-color: #00779a;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

class ImageCarousel extends Component {
  state = { isOpen: false, activeItemIdx: 0 };

  toggleCarousel = (idx: number) => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen, activeItemIdx: idx || 0 });
  };

  render() {
    const { isOpen, activeItemIdx } = this.state;
    return (
      <div>
        <Images>
          {this.props.images.map((item, idx) =>
            (<Image
              onClick={(e) => {
                e.stopPropagation();
                this.toggleCarousel(idx);
              }}
              key={item.id}
              src={getImageUrl(item.id)}
              alt="Image"
            />),
          )}
        </Images>
        <Grid>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              this.toggleCarousel(0);
            }}
          >
            <span>
              {this.props.images.length}{' '}
            </span>
            <Pluralizer
              amount={this.props.images.length}
              one="фотография"
              few="фотографии"
              other="фотографий"
            />
          </Button>
          {isOpen &&
            <ExtendedCarousel activeItemIdx={activeItemIdx || 0} escHandler={this.toggleCarousel}>
              {this.props.images}
            </ExtendedCarousel>}
        </Grid>
      </div>
    );
  }
}

export default ImageCarousel;
