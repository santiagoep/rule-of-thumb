import styled from 'styled-components';

import isSelectedMixin from '@mixins/border-is-selected.mixin';

export const StyledAction = styled.div`
  cursor: pointer;
  background-color: ${({ theme, color }) => theme.colors.bg[color]};
  margin-right: ${({ theme }) => theme.utils.spacing(2)};
  padding: ${({ theme }) => theme.utils.spacing(2)};
  display: flex;
  justify-content: center;
  text-align: center;
  max-height: 17px;
  ${isSelectedMixin}
`;

export const StyledActionLogo = styled.div`
  position: relative;
  width: 17px;
  height: 17px;
`;
