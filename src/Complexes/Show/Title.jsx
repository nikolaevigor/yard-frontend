import React from 'react';
import styled from 'styled-components';

// for features, description and infrastructure

const Title = styled.h2`
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
  margin: 0 auto;
`;

export default props => <Title>{props.children}</Title>;
