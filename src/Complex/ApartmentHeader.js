import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const ComplexApartmentHeader = styled.div`
  background-color: #fff;
`;

const ComplexApartmentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ComplexApartmentHeaderInfo = styled.div`
  padding-top: 24px;
  padding-bottom: 16px;
`;

const ComplexApartmentHeaderTitle = styled.h1`
  font-family: "Philosopher";
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  color: #3e4247;
  margin: 0 auto;
`;

const ComplexApartmentHeaderGeo = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  color: #a9afb6;
`;

const ComplexApartmentHeaderFavouritesButton = styled.button`
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
    <ComplexApartmentHeader>
      <Grid>
        <ComplexApartmentHeaderWrapper>
          <ComplexApartmentHeaderInfo>
            <ComplexApartmentHeaderTitle>Жилой комплекс «Полянка/44»</ComplexApartmentHeaderTitle>
            <ComplexApartmentHeaderGeo>Район Якиманка, улица Большая Полянка, дом 44 • 119180</ComplexApartmentHeaderGeo>
          </ComplexApartmentHeaderInfo>
          <ComplexApartmentHeaderFavouritesButton>В избранное</ComplexApartmentHeaderFavouritesButton>
        </ComplexApartmentHeaderWrapper>
      </Grid>
    </ComplexApartmentHeader>
  );
};
