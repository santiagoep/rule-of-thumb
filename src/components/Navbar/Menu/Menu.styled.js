import styled from 'styled-components';

export const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyledMenuItem = styled.li`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.utils.spacing(15)};
  :hover {
    color: ${({ theme }) => theme.colors.font.brand};
  }
`;

export const StyledSearchIcon = styled.div`
  position: relative;
  width: 27px;
  height: 27px;
`;
