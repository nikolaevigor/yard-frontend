// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Line from './SeparationLine';
import Pluralizer from '../../components/Pluralizer';

import { media } from '../../utils';

const Summary = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  ${media.fromSm`
    flex-direction: row;
  `};
`;

const Heading = styled.h2`
  display: block;
  margin: 1.5rem 0 0 1rem;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;

  &:last-child {
    margin-bottom: 1rem;
  }

  ${media.fromSm`
    margin: 1.5rem 0 1.5rem 3rem;

    &:first-child {
      margin-left: 0;
    }
  `};
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

type Props = {
  units: number,
  architect: string,
  developer: string,
};

export default ({ units, architect, developer }: Props) =>
  (<Grid>
    <Summary>
      <Heading>
        {units}
        <Small>
          <Pluralizer amount={units} one="предложение" few="предложения" other="предложений" />
        </Small>
      </Heading>
      <Heading>
        {architect}
        <Small>архитектор</Small>
      </Heading>
      <Heading>
        {developer}
        <Small>застройщик</Small>
      </Heading>
    </Summary>
    <Line />
  </Grid>);
