/* eslint-disable react/style-prop-object  */
// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import type { Location as LocationType } from '../types';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const containerStyle = {
  height: '306px',
  width: '583px',
  flex: '1 1 0',
  'margin-right': '0.5rem',
  'box-shadow': '0 0 30px 0 rgba(0, 0, 0, .5)',
};

export default ({ latitude = 55.75222, longitude = 37.61556 }: LocationType) =>
  (<MapBox zoom={[16]} style="mapbox://styles/mapbox/streets-v9" containerStyle={containerStyle}>
    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
      <Feature coordinates={[latitude, longitude]} />
    </Layer>
  </MapBox>);
