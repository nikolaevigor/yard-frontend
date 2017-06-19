import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from './Title'

const Infrastructure = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;

const Content = styled.div`
  margin-top: 16px;
`;

const RowWrapper = styled.div`
  margin-top: 8px;

  &:first-child {
    margin-top: 0;
  }
`;

const Record = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 0;
`;

export default () => {
  return (
    <Infrastructure>
      <Grid>
        <Title text="Инфарструктура"/>
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
};
