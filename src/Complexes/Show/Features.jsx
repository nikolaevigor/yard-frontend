// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Title from './Title';
import type { Complex as ComplexType, Details as DetailsType, Range as RangeType } from '../types';
import { quarters, kinds, securityKinds, constructionKinds } from '../dictionaries';

import { media } from '../../utils';

const Features = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Records = styled.div`
  margin-top: 0.5rem;
  overflow: scroll;

  ${media.fromSm`
    overflow: auto;
  `};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  display: flex;
  flex: 1 0 100%;
  justify-content: space-between;
  margin: 0 1rem;

  ${media.fromSm`
    flex: 1 0 50%;
    margin: 0 1rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `};
  ${media.fromMd`
    flex: 1 1 33%;
    margin: 0 1rem;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `};
`;

const Feature = styled.dl`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0;
  justify-content: space-around;
  flex: 1 0 100%;
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
  line-height: 1.38;
  color: #3e4247;
  margin-left: 1rem;
  white-space: nowrap;
`;

function cutFloat(number: number, to: number = 2): string {
  return Math.round(number).toFixed(to);
}

function formatCeilHeight({ from, to }: RangeType): string {
  const formattedFrom = cutFloat(from);
  const formattedTo = cutFloat(to);

  if (formattedFrom === formattedTo) {
    return `${formattedFrom}`;
  }
  return `${formattedFrom} - ${formattedTo}`;
}

function formatPrice(price: number): string {
  return cutFloat(price / 1000000, 1);
}

function formatParkings(amount: number): string {
  if (!amount || amount === 0) {
    return 'Нет';
  }
  return `${amount} м/м`;
}

type Props = {
  complex: ComplexType,
};

const detailsDefaults = {
  architect: '',
  developer: '',
  ceilHeight: { to: 0, from: 0 },
  parkings: 0,
  startYear: 0,
  startQuarter: 'first',
  commissioningYear: 0,
  commissioningQuarter: 'first',
  maintenanceCosts: 0,
  propertyKind: 'flat',
  security: 'guarded',
  undergroundGarages: 0,
  constructionKind: 'brick',
};

export default ({ complex }: Props) => {
  const { statistics = {}, details = detailsDefaults } = complex;
  const { propertiesCount = '', price = {}, totalArea = {} } = statistics;
  const {
    ceilHeight,
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
  }: DetailsType = details;
  const { from = {}, to = {} } = price;

  return (
    <Features>
      <Grid>
        <Title>Характеристики</Title>
        <Records>
          <Row>
            <Col xs={4}>
              <Feature>
                <Name>Количество квартир</Name>
                <Value>
                  {propertiesCount}
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Конструкция корпусов</Name>
                <Value>
                  {constructionKinds[constructionKind]}
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Начало строительства</Name>
                <Value>
                  {quarters[startQuarter]} квартал {startYear} года
                </Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Feature>
                <Name>Статус</Name>
                <Value>
                  {kinds[propertyKind]}
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Площадь</Name>
                <Value>
                  от {Math.round(totalArea.from)} до {Math.round(totalArea.to)} м²{' '}
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Конец строительства</Name>
                <Value>
                  {quarters[commissioningQuarter]} квартал {commissioningYear} года
                </Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Feature>
                <Name>Цены</Name>
                <Value>
                  от {formatPrice(from.rub)} до {formatPrice(to.rub)} млн
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Высота потолков</Name>
                <Value>
                  {formatCeilHeight(ceilHeight)} м
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Наземная парковка</Name>
                <Value>
                  {formatParkings(parkings)}
                </Value>
              </Feature>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Feature>
                <Name>Безопасность</Name>
                <Value>
                  {securityKinds[security]}
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Обслуживание</Name>
                <Value>
                  {maintenanceCosts} руб / м² / месяц
                </Value>
              </Feature>
            </Col>
            <Col xs={4}>
              <Feature>
                <Name>Подземная парковка</Name>
                <Value>
                  {formatParkings(undergroundGarages)}
                </Value>
              </Feature>
            </Col>
          </Row>
        </Records>
      </Grid>
    </Features>
  );
};
