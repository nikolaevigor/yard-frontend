import React from 'react';

import BodyClassName from 'react-body-classname';

import ApartmentHeader from './ApartmentHeader';
import ImageCarouesel from './ImageCarousel';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Nearby from './Nearby';
import Directions from './Directions';

export default () =>
  (<BodyClassName className="complex">
    <div>
      <ApartmentHeader />
      <ImageCarouesel />
      <Summary />
      <Features />
      <Description />
      <Infrastructure />
      <Offers />
      <Nearby />
      <Directions />
    </div>
  </BodyClassName>);
