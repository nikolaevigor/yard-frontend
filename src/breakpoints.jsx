import { css } from 'styled-components';

export default {
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
};
