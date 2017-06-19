import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from './Title'

const Features = styled.div`
  margin-top: 32px;
`;

const Records = styled.div`
  margin-top: 16px;
`

const Feature = styled.dl`
  display: flex;
  margin-top: 8px;
  margin-bottom: 0;

  &:first-child {
    margin-top: 0;
  }
`;

const FeatureName = styled.dt`
  width: 50%;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const FeatureValue = styled.dd`
  width: 50%;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
  margin-left: 34px;
`;

export default () => {
  return (
    <Features>
      <Grid>
        <Title>Характеристики></Title>
        <Records>
          <Row>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Feature>
                <FeatureName>Статус:</FeatureName>
                <FeatureValue>Квартиры</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Feature>
                <FeatureName>Цены:</FeatureName>
                <FeatureValue>от 5.3 до 143.5 млн</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <FeatureName>Количество квартир:</FeatureName>
                <FeatureValue>1503</FeatureValue>
              </Feature>
            </Col>
          </Row>
        </Records>
      </Grid>
    </Features>
  );
};
