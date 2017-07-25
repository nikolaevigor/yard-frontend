// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Title from './Title';

import { media } from '../../utils';

const DescriptionWrapper = styled.div`
  margin-top: 2rem;

  ${media.fromSm`
    margin-top: 3rem;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  ${media.fromSm`
    flex-direction: row;
    margin-bottom: 0;
  `};
`;

const Text = styled.article`
  white-space: pre-line;
  text-indent: 0;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1rem 1rem 1.5rem 1rem;
  color: #3e4247;
  max-height: 22rem;
  overflow: hidden;
  ${media.fromSm`
    max-height: none;
    margin: 0 1rem 1.5rem 91px;
  `};
`;

const Shade = styled.div`
  background: lightblue;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #fff);
  height: 8rem;
  margin-top: -9.5rem;

  ${media.fromSm`
    display: none;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 1rem;

  ${media.fromSm`
    display: none;
  `};
`;

const ReadFullButton = styled.button`
  display: block;
  background-color: #00779a;
  margin-top: -1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  line-height: 10px;
  color: #fff;
  font-weight: 300;
  cursor: pointer;
  ${media.fromSm`
    display: block;
  `};

  &:focus {
    outline: none;
  }
`;

type PropsType = {
  fullDescription: string,
};

export default class Description extends Component {
  constructor(props: PropsType) {
    super(props);
    const { fullDescription = '' } = props;
    this.state = { isExtended: false, fullDescription };
  }

  state: { isExtended: boolean, fullDescription: string };

  toggleState = () => {
    const { isExtended = false } = this.state;
    this.setState({ isExtended: !isExtended });
  };

  render() {
    const { isExtended = false, fullDescription = '' } = this.state;

    return (
      <DescriptionWrapper>
        <Grid>
          <Wrapper>
            <Title>Описание</Title>
            <Text style={{ 'max-height': isExtended ? 'none' : '22rem' }}>
              {fullDescription}
            </Text>
            {!isExtended && <Shade />}
            {!isExtended &&
              <ButtonWrapper>
                <ReadFullButton onClick={this.toggleState}>Прочитать описание</ReadFullButton>
              </ButtonWrapper>}
          </Wrapper>
        </Grid>
      </DescriptionWrapper>
    );
  }
}
