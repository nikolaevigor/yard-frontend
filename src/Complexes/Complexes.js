import React, { Component } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import BodyClassName from "react-body-classname";

import CompassDevelopmentBlock from "./CompassDevelopmentBlock";
import Intro from "./Intro";
import Cards from "./Cards";

import "../App.css";

class Complexes extends Component {
  render() {
    return (
      <BodyClassName className="complexes">
        <div>
          <CompassDevelopmentBlock />
          <Intro />
          <Cards />
        </div>
      </BodyClassName>
    );
  }
}

export default Complexes;
