/* eslint-disable import/prefer-default-export */
// @flow

export function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

export function pluralize(amount: number, one: string, few: string, other: string) {
  const cases = [2, 0, 1, 1, 1, 2, 2, 2, 2];
  return `${[one, few, other][cases[amount % 10]]}`;
}
