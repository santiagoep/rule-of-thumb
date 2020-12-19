import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: ${({ theme }) => theme.utils.spacing(10, 0)};
  width: fill-available;
`;

export const StyledMessageContainer = styled.div`
  display: block;
  width: 100%;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    width: 92%;
  }
`;
export const StyledTitleContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 30%;
  }
`;
export const StyledTitleComplement = styled.h6`
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.font.size.h6};
  }
`;
export const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.h5};

  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: ${({ theme }) => theme.font.size.h3};
  }
`;
export const StyledDescriptionContainer = styled.div`
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 70%;
  }
`;
export const StyledDescription = styled.p`
  font-weight: 300;
`;
