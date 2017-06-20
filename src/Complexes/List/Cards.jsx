import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from './Card'

const Cards = styled.div`
  display: flex;
  flex-flow: column;
  margin: 4rem 8rem 6rem 8rem;
`;

export default () => {
  return (
    <Cards>
      <Grid>
        <Card id={1} geo="SOUTH BEACH, SAN FRANCISCO" title="The Harrison" />
        <Card id={2} geo="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street" />
        <Card id={3} geo="NOLITA, MANHATTAN" title="152 Elizabeth" />
      </Grid>
    </Cards>
  );
};
