// @flow

import React, { Component } from 'react';

import BodyClassName from 'react-body-classname';

import ApartmentHeader from './ApartmentHeader';
import ImageCarousel from './ImageCarousel';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Nearby from './Nearby';
import Directions from './Directions';
import { get } from '../../api';
import type { Complex as ComplexType } from '../types';

class Show extends Component {
  state = {};

  state: ComplexType;

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load();
    }
  }

  load() {
    get(`/complexes/${this.props.match.params.id}`).then(json => this.setState(json));
  }

  render() {
    const {
      images = [],
      name,
      location = {},
      details = {},
      units,
      fullDescription = '',
      amenities = {},
    } = this.state;
    const { architect, developer } = details;

    return (
      <BodyClassName className="complex">
        <div>
          <ApartmentHeader name={name} location={location} />
          <ImageCarousel imageIds={images.map(image => image.id)} />
          <Summary units={units} architect={architect} developer={developer} />
          <Features complex={this.state} />
          {() => {
            if (fullDescription) {
              return <Description fullDescription={fullDescription} />;
            }
            return <div />;
          }}
          {() => {
            if (amenities) {
              return <Infrastructure amenities={amenities} />;
            }
            return <div />;
          }}
          <Offers />
          <Nearby />
          <Directions />
        </div>
      </BodyClassName>
    );
  }
}

export default Show;
