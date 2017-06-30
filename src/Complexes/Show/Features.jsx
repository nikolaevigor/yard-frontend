// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from './Title';

const Features = styled.div`
  margin-top: 2rem;
`;

const Records = styled.div`
  margin-top: 0.5rem;
`;

const Feature = styled.dl`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Name = styled.dt`
  width: 50%;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const Value = styled.dd`
  width: 50%;
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
  margin-left: 34px;
`;

export default ({ propertiesCount }: { propertiesCount: string }) =>
  (<Features>
    <Grid>
      <Title>Характеристики</Title>
      <Records>
        <Row>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Feature>
              <Name>Статус:</Name>
              <Value>Квартиры</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <Feature>
              <Name>Цены:</Name>
              <Value>от 5.3 до 143.5 млн</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
          <Col lg={4}>
            <Feature>
              <Name>Количество квартир:</Name>
              <Value>{propertiesCount}</Value>
            </Feature>
          </Col>
        </Row>
      </Records>
    </Grid>
  </Features>);
