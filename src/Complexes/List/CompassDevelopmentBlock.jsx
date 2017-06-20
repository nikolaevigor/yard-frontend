import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import CompassDevelopmentLogo from "../../img/compass-development-logo.svg";

const Wrapper = styled.div`
  padding: 80px 0;
  overflow: hidden;
  background-color: #000;
`;

export default () => {
  return (
    <Wrapper>
      <Row center="lg">
        <img src={CompassDevelopmentLogo} alt="Compass Development Logo" />
      </Row>
    </Wrapper>
  );
};
