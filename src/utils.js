/* eslint-disable import/prefer-default-export */
// @flow

function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

function pluralize(wordRoot, num, endings) {
  const cases = [0, 1, 2, 2, 2, 0, 0, 0, 0];
  return `${num} ${wordRoot}${endings[cases[num % 10]]}`;
}

export { getImageUrl, pluralize };
