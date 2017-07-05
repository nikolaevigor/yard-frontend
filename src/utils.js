/* eslint-disable import/prefer-default-export */
// @flow

export function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

export function pluralize(num: number, forms: Array<string>) {
  const cases = [0, 1, 2, 2, 2, 0, 0, 0, 0];
  return `${num} ${forms[cases[num % 10]]}`;
}
