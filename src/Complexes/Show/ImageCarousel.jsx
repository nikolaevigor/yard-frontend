// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import { getImageUrl } from '../../utils';

const Images = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: scroll;
`;

const Image = styled.img`
  height: 400px;
`;

const FavButton = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  margin-top: -42px;
  border-radius: 2px;
  border: 0;
  background-color: #00779a;
  font-family: "Fira Sans", sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #fff;
`;

type Props = { imageIds: Array<string> };

export default ({ imageIds }: Props) =>
  (<div>
    <Images>
      {imageIds.map(id => <Image key={id} src={getImageUrl(id)} alt="Image" />)}
    </Images>
    <Grid>
      <FavButton>{imageIds.length} фотография</FavButton>
    </Grid>
  </div>);
