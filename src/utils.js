/* eslint-disable import/prefer-default-export */

function getImageUrl(id, height = 512) {
  return `https://images.jqestate.ru/${id}-jqestate-${height}`;
}

export { getImageUrl };
