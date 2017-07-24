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
  fromSm: (...args: any) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  fromMd: (...args: any) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  fromLg: (...args: any) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  fromSmHeight: (...args: any) => css`
    @media (min-height: 768px) {
      ${css(...args)}
    }
  `,
};
