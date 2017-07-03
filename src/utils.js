/* eslint-disable import/prefer-default-export */
// @flow

function getImageUrl(id: string, height: number = 512): string {
  return `https://s3-eu-central-1.amazonaws.com/yard-images/${id}-${height}`;
}

export { getImageUrl };
