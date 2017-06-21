import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  background: #fff;
  text-decoration: none;
  margin-bottom: 3rem;
  border-bottom: solid 2px #646971;

  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.3);
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Geo = styled.p`
  text-align: left;
  color: #646971;
  font-family: Monaco;
  margin: 0;
`;

const Title = styled.h3`
  text-align: left;
  color: #000;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  margin-top: 1.5rem;
  margin-bottom: 0;
`;

const Info = styled.p`
  text-align: left;
  color: #3E4247;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.5rem 2rem;
`;

const Thumbnail = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
`;

export default props =>
  (<Card to={`/complex/${props.id}`}>
    <Thumbnail src={`${process.env.PUBLIC_URL}/img/apartment_${props.id}.png`} />
    <Content>
      <Geo>{props.geo}</Geo>
      <Title>{props.title}</Title>
      <Info>
        One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern
        residences in
        Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four
        bedrooms within the
        63-story tower are generously proportioned.
      </Info>
    </Content>
  </Card>);
