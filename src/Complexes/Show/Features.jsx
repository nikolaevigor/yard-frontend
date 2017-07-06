// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from './Title';
import type { Complex as ComplexType } from '../types';
import { quarters, kinds, securityKinds, constructionKinds } from '../dictionaries';

const Features = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  margin-left: 2rem;
  white-space:nowrap;
`;

function cutFloat(number, to = 2) {
  return Math.round(number).toFixed(to);
}

function formatCeilHeight({ from, to }) {
  const formattedFrom = cutFloat(from);
  const formattedTo = cutFloat(to);

  if (formattedFrom === formattedTo) {
    return `${formattedFrom}`;
  }
  return `${formattedFrom} - ${formattedTo}`;
}

function formatPrice(price) {
  return cutFloat(price / 1000000, 1);
}

function formatGarages(garagesAmount) {
  if (garagesAmount || garagesAmount === 0) {
    return 'Нет';
  }
  return `${garagesAmount} м/м`;
}

type Props = {
  complex: ComplexType,
};

export default ({ complex }: Props) => {
  const { statistics = {}, details = {} } = complex;
  const { propertiesCount = '', price = {}, totalArea = {} } = statistics;
  const {
    ceilHeight = {},
    parkings,
    startYear,
    startQuarter,
    commissioningYear,
    commissioningQuarter,
    maintenanceCosts,
    propertyKind,
    security,
    undergroundGarages,
    constructionKind,
  } = details;
  const { from = {}, to = {} } = price;

  return (
    <Features>
      <Grid>
        <Title>Характеристики</Title>
        <Records>
          <Row>
            <Col lg={4}>
              <Feature>
                <Name>Количество квартир</Name>
                <Value>{propertiesCount}</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Конструкция корпусов</Name>
                <Value>{constructionKinds[constructionKind]}</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Начало строительства</Name>
                <Value>{quarters[startQuarter]} квартал {startYear} года</Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Feature>
                <Name>Статус</Name>
                <Value>{kinds[propertyKind]}</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Площадь</Name>
                <Value>от {totalArea.from} до {totalArea.to} м² </Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Конец строительства</Name>
                <Value>
                  {quarters[commissioningQuarter]} квартал {commissioningYear} года
                </Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Feature>
                <Name>Цены</Name>
                <Value>от {formatPrice(from.rub)} до {formatPrice(to.rub)} млн</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Высота потолков</Name>
                <Value>{formatCeilHeight(ceilHeight)} м</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Наземная парковка</Name>
                <Value>{formatGarages(parkings)}</Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Feature>
                <Name>Безопасность</Name>
                <Value>{securityKinds[security]}</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Обслуживание</Name>
                <Value>{maintenanceCosts} руб / м² / месяц</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Name>Подземная парковка</Name>
                <Value>{formatGarages(undergroundGarages)}</Value>
              </Feature>
            </Col>
          </Row>
        </Records>
      </Grid>
    </Features>
  );
};
