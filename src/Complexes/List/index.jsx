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
import type { Item as ItemType } from '../types';

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
    items: Array<ItemType>,
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
