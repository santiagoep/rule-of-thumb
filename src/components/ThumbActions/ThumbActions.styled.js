import styled from 'styled-components';

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  padding: ${({ theme }) => theme.utils.spacing(3, 5)};
  color: inherit;
  font-weight: bold;
  transition: ${({ theme }) => theme.transitions.button};
  :hover {
    color: ${({ theme }) => theme.colors.font.primary};
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;
