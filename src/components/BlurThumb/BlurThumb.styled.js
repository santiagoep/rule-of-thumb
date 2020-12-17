import styled, { css } from 'styled-components';

const controlsStyles = () => css`
  cursor: pointer;
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  :after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.7;
  }
  :hover {
    :after {
      opacity: 1;
    }
  }
`;

const controlsLogosStyles = () => css`
  position: relative;
  height: 40px;
  width: 40px;
  > svg {
    color: red;
  }
`;

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

export const StyledActions = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  color: white;
`;

export const StyledLike = styled.div`
  ${controlsStyles}
  :after {
    background: ${({ theme }) => theme.colors.bg.like};
  }
`;

export const StyledDisLike = styled.div`
  ${controlsStyles}
  :after {
    background: ${({ theme }) => theme.colors.bg.dislike};
  }
`;

export const StyledLikeLogo = styled.div`
  ${controlsLogosStyles}
`;

export const StyledDisLikeLogo = styled.div`
  ${controlsLogosStyles}
`;
