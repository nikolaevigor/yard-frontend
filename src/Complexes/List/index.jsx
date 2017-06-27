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
  return [location.subLocalityName, location.street].join(', ');
}

function getImgBaseUrl() {
  return 'https://images.jqestate.ru/{id}-jqestate-{heightSize}';
}

function formatImgUrl(complex) {
  let imgUrl = getImgBaseUrl().replace('{id}', complex.images[0].id);
  imgUrl = imgUrl.replace('{heightSize}', 512);
  return imgUrl;
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
        this.setState(json);
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
                  title={complex.name}
                  geo={formatLocation(complex.location)}
                  imgUrl={formatImgUrl(complex)}
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
