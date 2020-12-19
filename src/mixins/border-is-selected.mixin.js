import { css } from 'styled-components';

const borderIsSelectedMixin = ({ isSelected, theme }) =>
  isSelected &&
  css`
    border: 2px solid ${theme.colors.border.secondary};
  `;

export default borderIsSelectedMixin;
