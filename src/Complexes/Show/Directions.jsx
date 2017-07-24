// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import MapBox from './MapBox';
import SeparationLine from './SeparationLine';
import type { Location as LocationType } from '../types';
import { media } from '../../utils';

const Wrapper = styled.div`
  ${media.fromSm`
    display: flex;
    margin-top: -153px;
    margin-bottom: 4rem;
  `};
`;

const Places = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1 0;
  border: solid 1px #e0e0e1;
  padding: 0;

  ${media.fromSm`
    margin-left: 0.5rem;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
  `};
`;

const Place = styled.div`
  padding: 1rem;
  background-color: #fff;

  ${media.fromSm`
    padding: 1.5rem;
  `};
`;

const PlaceName = styled.dt`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;

const PlaceValue = styled.dd`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
  margin-left: 0;
  margin-top: 0.5rem;
`;

type Props = {
  location: LocationType,
};

export default ({ location }: Props) => {
  const { latitude = 55.75222, longitude = 37.61556 }: LocationType = location;

  return (
    <Grid>
      <Wrapper>
        <MapBox latitude={latitude} longitude={longitude} />
        <Places>
          <Place>
            <PlaceName>Красный Октябрь</PlaceName>
            <PlaceValue>24 минуты, 6 км</PlaceValue>
          </Place>
          <SeparationLine />
          <Place>
            <PlaceName>World Class</PlaceName>
            <PlaceValue>2 минуты, 300 м</PlaceValue>
          </Place>
          <SeparationLine />
          <Place>
            <PlaceName>Третьяковская галерея</PlaceName>
            <PlaceValue>14 минут, 4 км</PlaceValue>
          </Place>
        </Places>
      </Wrapper>
    </Grid>
  );
};
