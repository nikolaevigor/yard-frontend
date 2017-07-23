// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Children } from 'react';

import { media } from '../../utils';

const Card = styled(Link)`
  display: block;
  flex: 1 0 100%;
  background: #fff;
  text-decoration: none;
  margin-bottom: 2rem;
  border-bottom: solid 2px #646971;
  width: 100%;

  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.3);
  }

  &:first-child {
    margin-top: 0;
  }

  ${media.fromMd`
    display: flex;
  `};

  ${media.fromSm`
    width: auto;
    margin-bottom: 3rem;
  `};

`;

const Geo = styled.p`
  text-align: left;
  color: #646971;
  font-family: Monaco;
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
`;

const Title = styled.h3`
  text-align: left;
  color: #000;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  line-height: 40px;
  margin-top: 1.5rem;
  margin-bottom: 0;

  ${media.fromSm`
    font-size: 40px;
    line-height: 56px;
  `};
`;

const Info = styled.p`
  text-align: left;
  color: #3e4247;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.5rem 1rem;

  ${media.fromMd`
    padding: 1.5rem 2rem;
  `};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;

  ${media.fromMd`
    width: 484px;
    height: 350px;
  `};
`;

type CardProps = {
  id: number,
  imgUrl: string,
  location: string,
  name: string,
  children: Children,
};

export default ({ id, imgUrl, location, name, children }: CardProps) =>
  (<Card to={`/complex/${id}`}>
    <Thumbnail src={imgUrl} />
    <Content>
      <Geo>
        {location}
      </Geo>
      <Title>
        {name}
      </Title>
      <Info>
        {children}
      </Info>
    </Content>
  </Card>);
