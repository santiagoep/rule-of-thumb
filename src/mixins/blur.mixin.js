import { css } from 'styled-components';

const blurMixin = ({ blurIntensity }) =>
  css`
    position: relative;
    backdrop-filter: blur(${blurIntensity}px);
    :after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.bg.tertiary};
      opacity: 0.4;
    }
  `;

export default blurMixin;
