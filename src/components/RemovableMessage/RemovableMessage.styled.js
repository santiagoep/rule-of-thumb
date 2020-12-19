import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.utils.spacing(7)};
  ${({ theme }) => theme.breakpoints.tablet} {
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.utils.spacing(5, 7)};
  }
`;

export const StyledCloseIcon = styled.div`
  cursor: pointer;
  position: relative;
  width: 15px;
  height: 15px;
`;
