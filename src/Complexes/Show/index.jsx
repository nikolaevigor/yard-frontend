import React, { Component } from 'react';

import BodyClassName from 'react-body-classname';

import ApartmentHeader from './ApartmentHeader';
import ImageCarouesel from './ImageCarousel';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Nearby from './Nearby';
import Directions from './Directions';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.jqestate.ru/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(json => this.setState(json));
  }

  getSubtitle() {
    const { location = {} } = this.state;
    const { subLocalityName = '', street = '', house = '', postalCode = '' } = location;
    return `${[subLocalityName, street, house].join(', ')} • ${postalCode}`;
  }

  render() {
    const { images = [], name: title = 'Title is missing', statistics = {} } = this.state;
    const { propertiesCount = 'N/A' } = statistics;
    return (
      <BodyClassName className="complex">
        <div>
          <ApartmentHeader title={title} subtitle={this.getSubtitle()} />
          <ImageCarouesel imageIDs={images.map(image => image.id)} />
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
