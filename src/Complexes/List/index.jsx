/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';

import CompassDevelopmentBlock from './CompassDevelopmentBlock';
import Intro from './Intro';
import Card from './Card';

const Cards = styled.div`
  margin: 4rem 8rem 6rem 8rem;
`;

function formatLocation(location) {
  return [location.subLocalityName, location.street].filter(item => !!item).join(', ');
}

function getImageUrl(complex) {
  return `https://images.jqestate.ru/${complex.images[0].id}-jqestate-512`;
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then((json) => {
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
                  imgUrl={getImageUrl(complex)}
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
