// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import logo from './img/compass-logo.svg';

const Header = styled.header`
  background: #fff;
  border-bottom: solid 1px #e0e0e1;

  @media (max-width: 768px) {
    max-height: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #3e4247;
  text-decoration: none;
  font-size: 16px;
  font-family: "Fira Sans", sans-serif;
  margin: 0 16px;
  line-height: 1.0;
  text-align: center;
  vertical-align: middle;

  &:first-child {
    margin-left: 0;
    margin-right: 16px;
  }

  &:last-child {
    margin-left: 16px;
    margin-right: 0;
  }
`;

const CompassLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    width: 7.5rem;
    height: 1rem;
  }
`;

export default () =>
  (<Header>
    <Grid>
      <Wrapper>
        <Link to="/">
          <CompassLogo src={logo} alt="Compass Logo" />
        </Link>
        <Nav>
          <NavLink to="#buy">Купить</NavLink>
          <NavLink to="#rent">Снять</NavLink>
          <NavLink to="#our_agents">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>);
