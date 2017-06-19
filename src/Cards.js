import React from 'react'
import logo from './img/compass-logo.svg'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from './Card.js'

const Cards = styled.div`
  display: flex;
  flex-flow: column;
  margin: 64px 128px 96px 128px;
`;

export default () => {
  return (
    <Cards>
      <Grid>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Cards>
  );
};
