import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from './Title';

const Infrastructure = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const Content = styled.div`
  margin-top: 1rem;
`;

const RowWrapper = styled.div`
  margin-top: 0.5rem;

  &:first-child {
    margin-top: 0;
  }
`;

const Record = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 0;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Title>Инфарструктура</Title>
      <Content>
        <RowWrapper>
          <Row>
            <Col lg={2}>
              <Record>Бассейн</Record>
            </Col>
            <Col lg={2}>
              <Record>Детский сад</Record>
            </Col>
            <Col lg={2}>
              <Record>Частная школа</Record>
            </Col>
            <Col lg={2}>
              <Record>Бассейн</Record>
            </Col>
            <Col lg={2}>
              <Record>Детский сад</Record>
            </Col>
            <Col lg={2}>
              <Record>Частная школа</Record>
            </Col>
          </Row>
        </RowWrapper>
        <RowWrapper>
          <Row>
            <Col lg={2}>
              <Record>Частная школа</Record>
            </Col>
            <Col lg={2}>
              <Record>Частная школа</Record>
            </Col>
          </Row>
        </RowWrapper>
      </Content>
    </Grid>
  </Infrastructure>
  );
