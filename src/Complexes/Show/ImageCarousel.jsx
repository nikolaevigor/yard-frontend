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
`;

class ImageCarousel extends Component {
  state = { isOpen: false };
  extendCarousel = () => {
    this.setState({ isOpen: true });
  };
  collapseCarousel = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Images>
          {this.props.imageIds.map(id => <Image key={id} src={getImageUrl(id)} alt="Image" />)}
        </Images>
        <Grid>
          <Button onClick={this.extendCarousel}>
            <span>
              {this.props.imageIds.length}{' '}
            </span>
            <Pluralizer
              amount={this.props.imageIds.length}
              one="фотография"
              few="фотографии"
              other="фотографий"
            />
          </Button>
          {isOpen &&
            <ExtendedCarousel escHandler={this.collapseCarousel}>
              {this.props.imageIds}
            </ExtendedCarousel>}
        </Grid>
      </div>
    );
  }
}

export default ImageCarousel;
