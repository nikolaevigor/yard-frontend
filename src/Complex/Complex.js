import React, { Component } from "react";
import styled from "styled-components";

import BodyClassName from "react-body-classname";
import { Grid, Row, Col } from "react-flexbox-grid";

import ApartmentHeader from "./ApartmentHeader";
import ImageCarouesel from "./ImageCarousel";
import Summary from "./Summary";
import Features from "./Features";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Nearby from "./Nearby";
import Directions from "./Directions";

class Complex extends Component {
  render() {
    return (
      <BodyClassName className="complex">
        <div>
          <ApartmentHeader />
          <ImageCarouesel />
          <Summary />
          <Features />
          <Description />
          <Infrastructure />
          <Offers />
          <Nearby />
          <Directions />
        </div>
      </BodyClassName>
    );
  }
}

export default Complex;
