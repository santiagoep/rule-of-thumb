import styled, { css } from 'styled-components';

const centeredMixin = ({ centered }) =>
  centered
    ? css`
        margin: 0 auto;
      `
    : '';

const relativeMixin = ({ relative }) =>
  relative
    ? css`
        position: relative;
      `
    : '';

const fluidMixin = ({ fluid, limit, theme }) => {
  if (fluid && !limit) {
    return css`
      width: ${theme.containerWidth.fluid.width};
      max-width: ${theme.containerWidth.fluid.maxWidth};
    `;
  } else if (fluid && limit) {
    return css`
      width: ${theme.containerWidth.limitFluid.width};
      max-width: ${theme.containerWidth.limitFluid.maxWidth};
    `;
  }
  return '';
};

const widthMixin = ({ theme }) => css`
  width: ${theme.containerWidth.smallMobile.width};
  max-width: ${theme.containerWidth.smallMobile.maxWidth};
  ${fluidMixin}
  ${theme.breakpoints.mobile} {
    width: ${theme.containerWidth.mobile.width};
    max-width: ${theme.containerWidth.mobile.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.tablet} {
    width: ${theme.containerWidth.tablet.width};
    max-width: ${theme.containerWidth.tablet.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.desktop} {
    width: ${theme.containerWidth.desktop.width};
    max-width: ${theme.containerWidth.desktop.maxWidth};
    ${fluidMixin}
  }
  ${theme.breakpoints.screen} {
    width: ${theme.containerWidth.screen.width};
    max-width: ${theme.containerWidth.screen.maxWidth};
    ${fluidMixin}
  }
`;

const heightMixin = ({ height }) =>
  height
    ? css`
        height: ${height};
      `
    : '';

export default styled.div`
  ${relativeMixin}
  ${centeredMixin}
  ${widthMixin}
  ${heightMixin}
`;
