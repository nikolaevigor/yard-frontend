// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import Title from './Title';
import Line from './SeparationLine';

const Description = styled.div`
  margin-top: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Text = styled.article`
  white-space: pre-line;
  text-indent: 0;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: 91px;
  margin-bottom: 1.5rem;
  color: #3e4247;
`;

type Props = {
  fullDescription: string,
};

export default ({ fullDescription = '' }: Props) =>
  (<Description>
    <Grid>
      <Wrapper>
        <Title>Описание</Title>
        <Text>{fullDescription}</Text>
      </Wrapper>
      <Line />
    </Grid>
  </Description>);
