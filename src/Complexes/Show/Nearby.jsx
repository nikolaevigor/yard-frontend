// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Nearby = styled.div`
  background-color: #3e4247;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin-right: 1rem;
`;

const SubTitle = styled.p`
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
  margin-top: 181px;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  margin-top: 4rem;
  margin-bottom: 0;
`;

const InfoLink = styled.a`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  color: #00779a;
  text-decoration: none;
  margin-top: 3rem;
`;

const Image = styled.img`
  width: 100%;
  height: 560px;
  margin-top: 4rem;
  margin-bottom: 218px;
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Nearby>
    <Grid>
      <Row>
        <Col lg={6}>
          <Wrapper>
            <SubTitle>Якиманка</SubTitle>
            <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
            <InfoLink>Гид по Якиманке →</InfoLink>
          </Wrapper>
        </Col>
        <Col lg={6}>
          <Image src={`${PUBLIC_URL}/img/polyanka-photo.png`} alt="Полянка" />
        </Col>
      </Row>
    </Grid>
  </Nearby>);
