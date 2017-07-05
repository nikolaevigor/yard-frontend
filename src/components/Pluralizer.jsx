// @flow

import React from 'react';
import { pluralize } from './../utils';

type Props = {
  num: number,
  forms: Array<string>,
};

export default ({ num, forms }: Props) =>
  (<span>
    {pluralize(num, forms)}
  </span>);
