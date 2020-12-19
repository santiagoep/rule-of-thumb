import styled from 'styled-components';

export const StyledMenu = styled.ul`
  list-style: none;
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.tertiary};
  padding-top: ${({ theme }) => theme.utils.spacing(5)};
  font-size: ${({ theme }) => theme.font.size.h6};
  text-align: left;
  font-weight: 300;
  animation: fadeInBasic 0.4s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: 0s;
  opacity: 0;

  @keyframes fadeInBasic {
    99% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    left: unset;
    width: 50vw;
    text-align: right;
    background-color: ${({ theme }) => theme.colors.bg.tertiary80};
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    position: relative;
    background: none;
    padding: 0;
    margin: 0;
    width: auto;
    font-size: ${({ theme }) => theme.font.size.subtitle1};
  }
`;

export const StyledMenuItem = styled.li`
  margin: ${({ theme }) => theme.utils.spacing(10, 5)};
  :hover {
    color: ${({ theme }) => theme.colors.font.brand};
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    margin: ${({ theme }) => theme.utils.spacing(10, 10)};
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    cursor: pointer;
    margin: ${({ theme }) => theme.utils.spacing(0, 0, 0, 15)};
  }
`;

export const StyledSearchIcon = styled.div`
  position: relative;
  width: 27px;
  height: 27px;
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: auto;
  }
`;

export const StyledMenuMobile = styled.div`
  display: ${({ opened }) => (opened ? 'none' : 'block')};
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

export const StyledClose = styled.div`
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  width: 40px;
  height: 40px;
  right: 0;
  top: 0;
  ${({ theme }) => theme.breakpoints.tablet} {
    right: 49.5vw;
    top: -5px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;
