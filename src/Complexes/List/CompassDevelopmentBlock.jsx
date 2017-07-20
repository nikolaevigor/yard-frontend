// @flow

import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import CompassDevelopmentLogo from '../../img/compass-development-logo.svg';

import breakpoints from '../../breakpoints';

const Wrapper = styled.div`
  padding: 80px 0;
  overflow: hidden;
  background-color: #000;

  ${breakpoints.to.sm`
    display: none;
  `};
`;

export default () =>
  (<Wrapper>
    <Row center="xs">
      <img src={CompassDevelopmentLogo} alt="Compass Development Logo" />
    </Row>
  </Wrapper>);
