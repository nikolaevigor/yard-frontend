// @flow

import styled from 'styled-components';

import { media } from '../../utils';

export default styled.hr`
  margin: 0 1rem;
  border: 0;
  height: 1px;
  background-color: #e0e0e1;

  ${media.fromSm`
    margin: 0;
  `};
`;
