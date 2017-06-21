import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Line from './SeparationLine';

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Heading = styled.h2`
  display: block;
  margin: 1.5rem 0 1.5rem 3rem;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;

  &:first-child {
    margin-left: 0;
  }
`;

const Small = styled.small`
  display: block;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
  margin-top: 10px;
`;

export default () => (
  <Grid>
    <Summary>
      <Heading>
          950
          <Small>
            предложений
          </Small>
      </Heading>
      <Heading>
          John McAslan + Partners
          <Small>
            архитектор
          </Small>
      </Heading>
      <Heading>
          Группа «ПСН»
          <Small>
            застройщик
          </Small>
      </Heading>
    </Summary>
    <Line />
  </Grid>
  );
