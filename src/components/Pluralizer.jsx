// @flow

import React from 'react';
import { pluralize } from './../utils';

type Props = {
  amount: number,
  one: string,
  few: string,
  other: string,
};

export default ({ amount, one, few, other }: Props) =>
  (<span>
    {pluralize(amount, one, few, other)}
  </span>);
