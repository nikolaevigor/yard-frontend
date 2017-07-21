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
import type { Complex as ComplexType } from '../types';
import breakpoints from '../../breakpoints';


const Cards = styled.div`
  margin: 4rem 0 6rem 0;

  ${breakpoints.toLg`
    margin: 2rem 1rem 4rem 1rem;
  `};
`;

type Location = {
  subLocalityName?: string,
  street?: string,
};

function formatLocation({ subLocalityName, street }: Location): string {
  return [subLocalityName, street].filter(item => !!item).join(', ');
}

function renderCard({ id, name, location, shortDescription }: ComplexType, imageUrl: string) {
  return (
    <Card key={id} id={id} name={name} location={formatLocation(location)} imgUrl={imageUrl}>
      {shortDescription}
    </Card>
  );
}

class List extends Component {
  state = {
    items: [],
  };
  state: {
    items: Array<ComplexType>,
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
          <Grid>
            <Intro />
            <Cards>
              {complexes.map((complex) => {
                if (complex.images.length > 0) {
                  return renderCard(complex, getImageUrl(complex.images[0].id));
                }
                return renderCard(complex, 'http://via.placeholder.com/490x350');
              })}
            </Cards>
          </Grid>
        </div>
      </BodyClassName>
    );
  }
}

export default List;
