import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledTitleComplement = styled.small`
  font-size: ${({ theme }) => theme.font.size.paragraph2};
  font-weight: 300;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.utils.spacing(5)};
`;

export const StyledDescription = styled.p`
  font-weight: 300;
  width: 89%;
  font-size: ${({ theme }) => theme.font.size.subtitle3};
`;

export const StyledMoreInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.utils.spacing(7)};
  > a {
    text-decoration: none;
    position: relative;
    color: inherit;
    margin-left: ${({ theme }) => theme.utils.spacing(2)};
  }
  > a:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1px;
    border-width: 0 0 1px;
    border-style: solid;
  }
`;

export const StyledMoreInfoLogo = styled.div`
  position: relative;
  height: 17px;
  width: 17px;
  margin-top: ${({ theme }) => theme.utils.spacing(1)};
`;

export const StyledCallToAction = styled.h3`
  font-weight: bold;
`;
