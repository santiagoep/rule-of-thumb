import styled from 'styled-components';

export const StyledLink = styled.li`
  font-size: ${({ theme }) => theme.font.size.caption};
  margin-bottom: ${({ theme }) => theme.utils.spacing(3)};
  ${({ theme }) => theme.breakpoints.tablet} {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.utils.spacing(6)};
    margin-bottom: 0;
    :first-of-type {
      margin-left: 0;
    }
  }
`;
export const StyledLogo = styled.div`
  margin: 0 auto;
  position: relative;
  width: 25px;
  height: 25px;
`;

export const StyledLinks = styled.ul`
  font-weight: normal;
  width: auto;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
export const StyledFollowUs = styled.small`
  display: block;
  margin: ${({ theme }) => theme.utils.spacing(10, 0, 2, 0)};
  font-size: ${({ theme }) => theme.font.size.caption};
  font-weight: 300;
  ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.utils.spacing(0, 2, 10, 0)};
  color: ${({ theme }) => theme.colors.font.primary};
  text-align: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const StyledSocialNetworks = styled.ul`
  width: auto;
  ${({ theme }) => theme.breakpoints.tablet} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const StyledSocialNetwork = styled.li`
  margin-bottom: ${({ theme }) => theme.utils.spacing(3)};
  ${({ theme }) => theme.breakpoints.tablet} {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.utils.spacing(5)};
    margin-bottom: 0;
  }
`;
