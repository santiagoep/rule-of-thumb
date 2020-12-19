import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 80%;
  padding: ${({ theme }) => theme.utils.spacing(10)};
  color: ${({ theme }) => theme.colors.font.secondary};
  z-index: ${({ theme }) => theme.zIndex.forward};
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: normal;
  position: relative;
  > .thumb__highest-opinion {
    position: absolute;
    left: ${({ theme }) => theme.utils.spacing(-10)};
    bottom: ${({ theme }) => theme.utils.spacing(2.5)};
  }
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.caption};
`;

export const StyledSince = styled.small`
  text-transform: capitalize;
  font-weight: bold;
`;
export const StyledCategory = styled.small`
  text-transform: capitalize;
  font-weight: normal;
  margin-left: ${({ theme }) => theme.utils.spacing(1)};
`;

export const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph1};
  font-weight: 300;
`;
