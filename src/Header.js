import React from 'react'
import logo from './img/compass-logo.svg'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const GlobalHeader = styled.header`
  background: #fff;
`;

const GlobalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GlobalHeaderNav = styled.nav`
  display: flex;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;

const GlobalHeaderNavLink = styled.a `
  color: #3e4247;
  text-decoration: none;
  font-size: 16px;
  font-family: "Fira Sans", sans-serif;
  margin: 0 16px;
  line-height: 1.0;
  text-align: center;
  vertical-align: middle;
`;

// const globalHeaderNavLink:first-child = styled.a `
//   margin-left: 0;
//   margin-right: 16px;
// `;
//
// const global-header-nav-link:last-child = styled.a`
//   margin-left: 16px;
//   margin-right: 0;
// `;

const GlobalHeaderCompassLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default () => {
  return (
    <GlobalHeader>
      <Grid>
        <GlobalHeaderWrapper>
          <GlobalHeaderCompassLogo src={logo} alt="@Compass Logo" />
          <GlobalHeaderNav>
            <GlobalHeaderNavLink href="#buy">Купить</GlobalHeaderNavLink>
            <GlobalHeaderNavLink href="#rent">Снять</GlobalHeaderNavLink>
            <GlobalHeaderNavLink href="#our_agents">Наши агенты</GlobalHeaderNavLink>
          </GlobalHeaderNav>
        </GlobalHeaderWrapper>
      </Grid>
    </GlobalHeader>
  );
};
