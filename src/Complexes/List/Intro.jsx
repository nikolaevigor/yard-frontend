// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Col } from 'react-flexbox-grid';

const Title = styled.h2`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
  color: #3e4247;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  line-height: 1.5;
  color: #3e4247;
`;

const ContactTeam = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-style: none;
  border-radius: 2px;
  line-height: 1;

  &:hover {
    background-color: #404040;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Intro = styled.div`
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin: 2rem 0.5rem 0 0.5rem;
  }
`;

export default () =>
  (<Intro>
    <Grid>
      <Content>
        <Col lg={8}>
          <Title>Discover Our New Developments</Title>
          <Text>
            Compass brings a modern approach to new development marketing and sales. From boutique
            rental conversions to luxurious ground-up condominiums, browse our portfolio of current
            offerings.
          </Text>
          <ContactTeam>
            <Button>Contact The Team</Button>
          </ContactTeam>
        </Col>
      </Content>
    </Grid>
  </Intro>);
