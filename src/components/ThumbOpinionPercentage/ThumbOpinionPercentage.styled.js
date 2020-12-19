import styled from 'styled-components';

import widthMixin from '@mixins/width.mixin';
import { thumbActionTypes } from '@constants/index';

export const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 45px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.h5};
  font-weight: 400;
`;

export const StyledPercentage = styled.div`
  ${widthMixin}
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${({ type }) =>
    type === thumbActionTypes.like ? 'flex-start' : 'flex-end'};
  padding-left: ${({ theme }) => theme.utils.spacing(2)};
  background: ${({ theme, type }) => theme.colors.bg[`${type}90`]};
`;

export const StyledPercentageLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const StyledPercentageText = styled.span`
  margin: ${({ theme }) => theme.utils.spacing(2)};
  :after {
    content: '%';
    font-size: ${({ theme }) => theme.font.size.subtitle3};
  }
`;
