import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: ${({ theme }) => theme.utils.spacing(10, 0)};
  width: fill-available;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: ${({ theme }) => theme.utils.spacing(15)};
`;
export const StyledTitleContainer = styled.div`
  width: 30%;
`;
export const StyledTitleComplement = styled.h6`
  font-size: ${({ theme }) => theme.font.size.h6};
  font-weight: 300;
`;
export const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.h3};
`;
export const StyledDescriptionContainer = styled.div`
  width: 70%;
`;
export const StyledDescription = styled.p`
  font-weight: 300;
`;
