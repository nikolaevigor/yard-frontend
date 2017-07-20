// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ArrowImage from './img/arrow.svg';

const Footer = styled.footer`
  padding-top: 32px;
  padding-bottom: 28px;
  background-color: #111;
`;

const Line = styled.hr`
  height: 2px;
  border-style: none;
  background-color: #3e4247;
  margin: 0;
`;

const Title = styled.h4`
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #646971;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 1.6;
`;

const CredentialsTitle = Title.extend`
  margin: 0;
  line-height: 1.6;

  &:last-child {
    margin-top: 16px;
  }
`;

const Link = styled.a`
  display: block;
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  text-decoration: none;
  margin-top: 8px;
`;

const Credentials = Link.withComponent('p').extend`
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 1.6;
  color: #a9afb6;

  &:last-child {
    margin-top: 16px;
  }
`;

const ArrowLink = Link.extend`
  margin-top: 16px;
  line-height: 1.6;
`;

const Legal = styled.p`
  text-align: left;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 16px;
  color: #a9afb6;
  margin-top: 96px;

  @media (max-width: 768px) {
    margin: 0 0.5rem;
    margin-bottom: 20px;
  }
`;

const ArrowImg = styled.img`margin-left: 8px;`;

const XsWrapper = styled.div`@media (max-width: 768px) {margin: 0 1rem 3rem 1rem;}`;

export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col xs={12} lg={2}>
          <XsWrapper>
            <CredentialsTitle>ООО «Ярд»</CredentialsTitle>
            <Credentials>ОГРН 1175074002531</Credentials>
            <Credentials>ИНН 5036165365</Credentials>
            <Credentials>+7 (999) 821-14-88</Credentials>
          </XsWrapper>
        </Col>
        <Col xs={12} lgOffset={2} lg={2}>
          <XsWrapper>
            <Line />
            <Title>Жилые комплексы</Title>
            <Link href="#">ВТБ Арена Парк</Link>
            <Link href="#">Садовые кварталы</Link>
            <Link href="#">Резиденция Монэ</Link>
            <ArrowLink href="#">
              Все ЖК Москвы
              <ArrowImg src={ArrowImage} alt="Arrow" />
            </ArrowLink>
          </XsWrapper>
        </Col>
        <Col xs={12} lg={2}>
          <XsWrapper>
            <Line />
            <Title>Компания</Title>
            <Link href="#">Команда</Link>
            <Link href="#">О компании</Link>
          </XsWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lgOffset={4} lg={8}>
          <Legal>
            Любая информация, представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой, определяемой положениями
            статьи 437 ГК РФ. © ООО «Ярд», 2017
          </Legal>
        </Col>
      </Row>
    </Grid>
  </Footer>);
