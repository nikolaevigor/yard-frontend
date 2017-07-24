// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { media } from '../../utils';

const Nearby = styled.div`background-color: #3e4247;`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin-right: 1rem;
  margin-left: 1rem;

  ${media.fromSm`
    margin-top: 4rem;
    margin-left: 0;
  `};

  ${media.fromMd`
    margin-bottom: 218px;
  `};
`;

const SubTitle = styled.p`
  font-family: "Philosopher";
  font-size: 1.25rem;
  font-weight: bold;
  color: #a9afb6;
  margin-top: 48px;
  margin-bottom: 0;

  ${media.fromMd`
    margin-top: 1.5rem;
    margin-bottom: 0;
    font-size: 1.5rem;
  `};
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 0;

  ${media.fromMd`
    margin-top: 4rem;
    margin-bottom: 0;
    font-size: 3rem;
  `};
`;

const InfoLink = styled.a`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  color: #00779a;
  text-decoration: none;
  margin-top: 2rem;
  margin-bottom: 3rem;

  ${media.fromMd`
    margin-top: 3rem;
    margin-bottom: 0;
  `};
`;

const Image = styled.img`
  width: 100%;
  max-height: 307px;
  object-fit: cover;
  ${media.fromSm`
    margin-top: 4rem;
    margin-bottom: 218px;
  `};
  ${media.fromMd`
    margin: 0;
    margin-top: 4rem;
    margin-bottom: 218px;
    max-height: 568px;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.fromSm`
    flex-direction: row;
  `};
`;

const Col = styled.div`
  display: flex;
  flex: 1 1 50%;

  ${media.fromMd`
    &:last-child {
      margin-left: 1rem;
    }
  `};
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
