import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Images = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: scroll;
`;

const Image = styled.img`
  height: 400px;
`;

const FavButton = styled.button`
  position: absolute;
  padding: 8px 16px;
  margin-top: -42px;
  border-radius: 2px;
  border: 0;
  background-color: #00779a;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #fff;
`;

export default () => {
  return (
    <div>
      <Images>
        <Image src={process.env.PUBLIC_URL + "/img/complex_1.png"} alt="1st image" />
        <Image src={process.env.PUBLIC_URL + "/img/complex_2.png"} alt="2nd image" />
        <Image src={process.env.PUBLIC_URL + "/img/complex_3.png"} alt="3rd image" />
        <Image src={process.env.PUBLIC_URL + "/img/complex_4.png"} alt="4th image" />
        <Image src={process.env.PUBLIC_URL + "/img/complex_5.png"} alt="5th image" />
      </Images>
      <Grid>
        <FavButton>41 фотография</FavButton>
      </Grid>
    </div>
  );
};
