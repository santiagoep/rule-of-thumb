import styled from 'styled-components';

import isSelectedMixin from '@mixins/border-is-selected.mixin';

export const StyledAction = styled.div`
  ${isSelectedMixin}
  cursor: pointer;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transitions.button};
  background: ${({ theme, isSelected, type }) =>
    theme.colors.bg[isSelected ? type : `${type}70`]};
  :hover {
    background: ${({ theme, type }) => theme.colors.bg[type]};
  }
`;

export const StyledActionLogo = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
`;
