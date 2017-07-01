/* eslint-disable import/prefer-default-export */
// @flow

function getImageUrl(id: string, height: number = 512): string {
  return `https://images.jqestate.ru/${id}-jqestate-${height}`;
}

export { getImageUrl };
