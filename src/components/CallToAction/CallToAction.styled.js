import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: auto;
  position: relative;
  padding: ${({ theme }) => theme.utils.spacing(4, 5)};
  background-color: ${({ theme }) => theme.colors.bg.secondary80};
  text-align: center;
  ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledMessage = styled.h6`
  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: 300;
`;

export const StyledAction = styled.button`
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.subtitle3};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-top: ${({ theme }) => theme.utils.spacing(5)};
  padding: ${({ theme }) => theme.utils.spacing(3, 5)};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
    color: ${({ theme }) => theme.colors.font.secondary};
    transition: ${({ theme }) => theme.transitions.button};
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 0;
  }
`;
