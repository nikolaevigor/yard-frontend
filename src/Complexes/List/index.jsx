import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

import { Link } from "react-router-dom";
import BodyClassName from "react-body-classname";

import CompassDevelopmentBlock from "./CompassDevelopmentBlock";
import Intro from "./Intro";
import Card from "./Card";

const Cards = styled.div`
  display: flex;
  flex-flow: column;
  margin: 4rem 8rem 6rem 8rem;
`;

class Complexes extends Component {
  render() {
    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentBlock />
          <Intro />
          <Cards>
            <Grid>
              <Card id={1} geo="SOUTH BEACH, SAN FRANCISCO" title="The Harrison" />
              <Card id={2} geo="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street" />
              <Card id={3} geo="NOLITA, MANHATTAN" title="152 Elizabeth" />
            </Grid>
          </Cards>
        </div>
      </BodyClassName>
    );
  }
}

export default Complexes;
