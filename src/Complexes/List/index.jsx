/* eslint-disable react/no-unescaped-entities */

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

function formatLocation(location) {
  return [location.subLocalityName, location.street].filter(item => !!item).join(', ');
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('complexes?filter[state]=public').then((json) => {
      this.setState({ items: json.items });
    });
  }

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
                />),
              )}
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default List;
