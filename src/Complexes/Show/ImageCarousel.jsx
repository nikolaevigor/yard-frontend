// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import ExtendedCarousel from './ExtendedCarousel';
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

const FavButton = styled.button`
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
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.extendCarousel = this.extendCarousel.bind(this);
    this.collapseCarousel = this.collapseCarousel.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
  }

  extendCarousel(e) {
    console.log('extend');
    console.log(e.which);
    this.setState({ isOpen: true });
  }

  collapseCarousel(e) {
    console.log('collapse');
    console.log(e.which);
    this.setState({ isOpen: false });
  }

  toggleCarousel(e) {
    console.log('tr');
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div onKeyPress={this.collapseCarousel}>
        <Images>
          {this.props.imageIds.map(id => <Image key={id} src={getImageUrl(id)} alt="Image" />)}
        </Images>
        <Grid>
          <FavButton>
            41 фотография
          </FavButton>
          {isOpen && <ExtendedCarousel />}
        </Grid>
      </div>
    );
  }
}

export default ImageCarousel;
