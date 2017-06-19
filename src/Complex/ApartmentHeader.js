import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const ApartmentHeader = styled.div`
  background-color: #fff;
`;

const ApartmentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ApartmentHeaderInfo = styled.div`
  padding-top: 24px;
  padding-bottom: 16px;
`;

const ApartmentHeaderTitle = styled.h1`
  font-family: "Philosopher";
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  color: #3e4247;
  margin: 0 auto;
`;

const ApartmentHeaderGeo = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

const ApartmentHeaderFavouritesButton = styled.button`
  background-color: transparent;
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  line-height: 10px;
  color: #00779a;
  font-weight: 300;
`;

export default () => {
  return (
    <ApartmentHeader>
      <Grid>
        <ApartmentHeaderWrapper>
          <ApartmentHeaderInfo>
            <ApartmentHeaderTitle>Жилой комплекс «Полянка/44»</ApartmentHeaderTitle>
            <ApartmentHeaderGeo>Район Якиманка, улица Большая Полянка, дом 44 • 119180</ApartmentHeaderGeo>
          </ApartmentHeaderInfo>
          <ApartmentHeaderFavouritesButton>В избранное</ApartmentHeaderFavouritesButton>
        </ApartmentHeaderWrapper>
      </Grid>
    </ApartmentHeader>
  );
};
