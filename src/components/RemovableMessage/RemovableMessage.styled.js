import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.utils.spacing(5, 7)};
  background: ${({ theme }) => theme.colors.bg.primary};
`;

export const StyledCloseIcon = styled.div`
  cursor: pointer;
  position: relative;
  width: 15px;
  height: 15px;
`;
