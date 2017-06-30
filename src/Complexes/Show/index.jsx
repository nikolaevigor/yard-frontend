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

class Show extends Component {
  state = {};

  state: {
    commissioningYear: number,
    adjacentTerritory: {
      area: number,
      isAccessOpen: boolean,
      isAllowedCars: boolean,
      isGreeneryPlanted: boolean,
      playgrounds: number,
    },
    name: string,
    updatedAt: string,
    location: {
      latitude: number,
      localityId: number,
      subwayIds: Array<string>,
      countryName: string,
      longitude: number,
      postalCode: number,
      countryId: number,
      house: number,
      localityName: string,
      street: string,
      regionId: number,
      regionName: string,
    },
    state: string,
    statistics: {
      resalePropertiesCount: number,
      price: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      totalResaleArea: {
        from: number,
        to: number,
      },
      resalePrice: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      propertiesCount: number,
      totalPrimaryArea: {
        from: number,
        to: number,
      },
      primaryPrice: {
        from: {
          usd: number,
          eur: number,
          rub: number,
        },
        to: {
          usd: number,
          eur: number,
          rub: number,
        },
      },
      primaryPropertiesCount: number,
      totalArea: {
        from: number,
        to: number,
      },
    },
    keysIssueDate: string,
    purchaseTimeConditions: {
      agreementPreparation: number,
      oralReservation: number,
    },
    commissioningQuarter: number,
    linkedContactIds: Array<string>,
    responsibleUser: {
      id: number,
      departmentId: number,
    },
    createdByUserId: number,
    id: number,
    updatedByUserId: number,
    createdAt: string,
    images: Array<{
      id: string,
      isPublic: boolean,
    }>,
    accreditors: Array<string>,
  };

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
    const { images = [], name, statistics = {}, location = {} } = this.state;
    const { propertiesCount } = statistics;

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
