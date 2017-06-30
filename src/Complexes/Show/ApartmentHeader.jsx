// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Header = styled.div`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Info = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 2rem;
  font-weight: 700;
  line-height: 36px;
  color: #3e4247;
  margin: 0 auto;
`;

const Location = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

const FavouritesButton = styled.button`
  background-color: transparent;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  line-height: 10px;
  color: #00779a;
  font-weight: 300;
`;

type ApartmentHeaderProps = {
  name: string,
  location: Object,
};

function formatLocation({ subLocalityName, street, house, postalCode }: Object): string {
  const locationBase = [(subLocalityName: string), (street: string), (house: string)]
    .filter(item => !!item)
    .join(', ');

  if (postalCode) return `${locationBase} • ${postalCode}`;
  return locationBase;
}

export default ({ name, location }: ApartmentHeaderProps) =>
  (<Header>
    <Grid>
      <Wrapper>
        <Info>
          <Title>{name}</Title>
          <Location>{formatLocation(location)}</Location>
        </Info>
        <FavouritesButton>В избранное</FavouritesButton>
      </Wrapper>
    </Grid>
  </Header>);
