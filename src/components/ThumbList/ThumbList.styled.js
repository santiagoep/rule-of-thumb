import styled from 'styled-components';

export const StyledList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${({ theme }) => theme.breakpoints.laptop} {
    justify-content: space-between;
  }
`;

export const StyledListItem = styled.li`
  list-style: none;
  width: 100%;
  max-width: 550px;
  min-height: 650px;
  margin-bottom: ${({ theme }) => theme.utils.spacing(10)};
  ${({ theme }) => theme.breakpoints.laptop} {
    max-width: none;
    min-height: 650px;
    width: calc(50% - ${({ theme }) => theme.utils.spacing(3)});
    :nth-child(odd) {
      margin: ${({ theme }) => theme.utils.spacing(0, 3, 6, 0)};
    }
    :nth-child(even) {
      margin: ${({ theme }) => theme.utils.spacing(0, 0, 6, 3)};
    }
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    min-height: 600px;
    width: calc(50% - ${({ theme }) => theme.utils.spacing(5)});
    :nth-child(odd) {
      margin: ${({ theme }) => theme.utils.spacing(0, 5, 10, 0)};
    }
    :nth-child(even) {
      margin: ${({ theme }) => theme.utils.spacing(0, 0, 10, 5)};
    }
  }
`;
