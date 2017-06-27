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

class ComplexesList extends Component {
  componentWillMount() {
    this.setState({ imageBaseUrl: 'https://images.jqestate.ru/{id}-jqestate-{heightSize}' });
  }

  componentDidMount() {
    fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then((json) => {
        this.setState(json);
      });
  }

  formatImgUrl(complex) {
    let imgUrl = this.state.imageBaseUrl.replace('{id}', complex.images[0].id);
    imgUrl = imgUrl.replace('{heightSize}', 512);
    return imgUrl;
  }

  renderCards() {
    if (this.state.items == null) {
      return [];
    }
    const complexes = this.state.items;
    if (complexes !== {} && complexes !== undefined && complexes.length > 0) {
      return complexes.map(complex =>
        (<Card
          key={complex.id}
          id={complex.id}
          title={complex.name}
          geo={formatLocation(complex.location)}
          imgUrl={this.formatImgUrl(complex)}
        />),
      );
    }
    return [];
  }

  render() {
    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentBlock />
          <Intro />
          <Cards>
            <Grid>
              {this.renderCards()}
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default ComplexesList;
