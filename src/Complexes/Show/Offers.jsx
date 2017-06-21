import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Offers = styled.div`
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  padding-top: 4rem;
  text-align: center;
  font-family: "Philosopher";
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
  margin: 0 auto;
`;

const Cards = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 4rem;
`;

const Card = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #fff;
`;

const CardTitle = styled.h3`
  font-family: "Philosopher";
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin: 1.5rem 2rem 0 2rem;
  color: #3e4247;
`;

const CardParam = styled.dl`
  display: flex;
  flex-flow: column;
  margin: 1.5rem 2rem 0 2rem;
`;

const CardParamName = styled.dt`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
`;

const CardParamValue = styled.dd`
  font-family: "Fira Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
  color: #3e4247;
  margin-top: 0.5rem;
  margin-left: 0;
`;

const CardButton = styled.button`
  background-color: #000;
  color: #fff;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.0;
  border-style: none;
  border-radius: 2px;
  padding: 0.75rem 2rem;
  margin: 2rem 4rem 1.5rem 4rem;
`;

export default () => {
  return (
    <Offers>
      <Grid>
        <Title>Предложения в ЖК «Полянка/44»</Title>
        <Cards>
          <Row>
            <Col lg={4}>
              <Card>
                <CardTitle>1-комнатные квартиры</CardTitle>
                <CardParam>
                  <CardParamName>Площадь</CardParamName>
                  <CardParamValue>от 59 до 120 м²</CardParamValue>
                </CardParam>
                <CardParam>
                  <CardParamName>Стоимость</CardParamName>
                  <CardParamValue>от 20.3 до 84.2 млн руб</CardParamValue>
                </CardParam>
                <CardButton>Посмотреть предложения</CardButton>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardTitle>2-комнатные квартиры</CardTitle>
                <CardParam>
                  <CardParamName>Площадь</CardParamName>
                  <CardParamValue>от 59 до 120 м²</CardParamValue>
                </CardParam>
                <CardParam>
                  <CardParamName>Стоимость</CardParamName>
                  <CardParamValue>от 20.3 до 84.2 млн руб</CardParamValue>
                </CardParam>
                <CardButton>Посмотреть предложения</CardButton>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardTitle>3-комнатные квартиры</CardTitle>
                <CardParam>
                  <CardParamName>Площадь</CardParamName>
                  <CardParamValue>от 59 до 120 м²</CardParamValue>
                </CardParam>
                <CardParam>
                  <CardParamName>Стоимость</CardParamName>
                  <CardParamValue>от 20.3 до 84.2 млн руб</CardParamValue>
                </CardParam>
                <CardButton>Посмотреть предложения</CardButton>
              </Card>
            </Col>
          </Row>
        </Cards>
      </Grid>
    </Offers>
  );
};
