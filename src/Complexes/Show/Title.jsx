import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

// for features, description and infrastructure

const Title = styled.h2`
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 27px;
  color: #3e4247;
  margin: 0 auto;
`;

export default (props) => {
  return (
    <Title>{props.children}</Title>
  );
};
