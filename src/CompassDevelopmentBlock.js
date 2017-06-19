import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import CompassDevelopmentLogo from "./img/compass-development-logo.svg";

const BlockWrapper = styled.div`
  padding: 80px 0;
  background-color: #000;
`;

export default () => {
  return (
    <BlockWrapper>
      <Row center="lg">
        <img src={CompassDevelopmentLogo} alt="Compass Development Logo" />
      </Row>
    </BlockWrapper>
  );
};
