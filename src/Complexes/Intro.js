import React from 'react'
import logo from '../img/compass-logo.svg'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const IntroTitle = styled.h2`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  margin: 0;
  color: #3e4247;
`;

const IntroText = styled.p`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 1.5;
  color: #3e4247;
`;

const IntroContactTeam = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const IntroContactTeamButton = styled.button`
  background-color: #000;
  color: #fff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 12px 32px;
  border-style: none;
  border-radius: 2px;
  line-height: 1;

  &:hover {
    background-color: #404040;
  }
`;

const IntroContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Intro = styled.div`
  margin-top: 64px;
`;


export default () => {
  return (
    <Intro>
      <Grid>
        <IntroContent>
          <Col lg={8}>
            <IntroTitle>Discover Our New Developments</IntroTitle>
            <IntroText>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</IntroText>
            <IntroContactTeam>
              <IntroContactTeamButton>Contact The Team</IntroContactTeamButton>
            </IntroContactTeam>
          </Col>
        </IntroContent>
      </Grid>
    </Intro>
  );
};
