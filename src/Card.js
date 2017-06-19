import React from 'react'
import logo from './img/compass-logo.svg'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import Thumbnail from './img/apartment_1.png'

const Card = styled.div`
  display: flex;
  background: #fff;
  text-decoration: none;
  margin-bottom: 48px;
  border-bottom: solid 2px #646971;

  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.3);
  }

  &:first-child {
    margin-top: 0;
  }
`;

const CardGeo = styled.p`
  text-align: left;
  color: #646971;
  font-family: Monaco;
  margin: 0;
`;

const CardTitle = styled.h3`
  text-align: left;
  color: #000;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  margin-top: 24px;
  margin-bottom: 0;
`;

const CardInfo = styled.p`
  text-align: left;
  color: #3E4247;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column;
  padding: 24px 32px;
`;

const CardThumbnail = styled.img`
  width: 484px;
  height: 350px;
`;

// {/* <a class="card" href="#card1">
//     <img class="card-thumbnail" src="./img/apartment_2.jpg" alt="100 East 53rd Street apt. picture">
//     <div class="card-content">
//       <p class="card-geo">MIDTOWN EAST, MANHATTAN</p>
//       <h3 class="card-title">100 East 53rd Street</h3>
//       <p class="card-info">One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</p>
//     </div>
// </a> */}

export default () => {
  return (
    <Card>
      <CardThumbnail src={Thumbnail}/>
      <CardContent>
        <CardGeo>MIDTOWN EAST, MANHATTAN</CardGeo>
        <CardTitle>100 East 53rd Street</CardTitle>
        <CardInfo>One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</CardInfo>
      </CardContent>
    </Card>
  )
};
