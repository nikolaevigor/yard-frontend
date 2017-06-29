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

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.load();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load();
    }
  }

  load() {
    get(`/complexes/${this.props.match.params.id}`).then(json => this.setState(json));
  }

  render() {
    const { images = [], name, statistics = {}, location = {} } = this.state;
    const { propertiesCount = 'N/A' } = statistics;

    return (
      <BodyClassName className="complex">
        <div>
          <ApartmentHeader name={name} location={location} />
          <ImageCarousel imageIds={images.map(image => image.id)} />
          <Summary />
          <Features propertiesCount={propertiesCount} />
          <Description />
          <Infrastructure />
          <Offers />
          <Nearby />
          <Directions />
        </div>
      </BodyClassName>
    );
  }
}

export default Show;
