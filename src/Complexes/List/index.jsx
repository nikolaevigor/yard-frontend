/* eslint-disable react/no-unescaped-entities */
// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';

import CompassDevelopmentBlock from './CompassDevelopmentBlock';
import Intro from './Intro';
import Card from './Card';
import { getImageUrl } from '../../utils';
import { get } from '../../api';

const Cards = styled.div`
  margin: 4rem 8rem 6rem 8rem;
`;

type Location = {
  subLocalityName: string,
  street: string,
};

function formatLocation({ subLocalityName, street }: Location): string {
  return [subLocalityName, street].filter(item => !!item).join(', ');
}

class List extends Component {
  state = {
    items: [],
  };
  state: {
    items: Array<{
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
        subLocalityName: string,
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
    }>,
    pagination: {
      total: number,
      limit: number,
      offset: number,
    },
  };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items = [] }) => {
      this.setState({ items });
    });
  }
  items: Array<Object>;

  render() {
    const { items: complexes = [] } = this.state;
    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentBlock />
          <Intro />
          <Cards>
            <Grid>
              {complexes.map(complex =>
                (<Card
                  key={complex.id}
                  id={complex.id}
                  name={complex.name}
                  location={formatLocation(complex.location)}
                  imgUrl={getImageUrl(complex.images[0].id)}
                >
                  Так падажжжи
                </Card>),
              )}
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default List;
