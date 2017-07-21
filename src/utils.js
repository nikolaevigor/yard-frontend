/* eslint-disable import/prefer-default-export */
// @flow

import { css } from 'styled-components';

export function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

export function pluralize(amount: number, one: string, few: string, other: string) {
  const cases = [2, 0, 1, 1, 1, 2, 2, 2, 2];
  return `${[one, few, other][cases[amount % 10]]}`;
}

export const media = {
  toSm: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  toMd: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  toLg: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  fromSm: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  fromMd: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  fromLg: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};
