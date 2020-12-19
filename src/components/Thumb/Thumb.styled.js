import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  min-height: 550px;
  :before {
    content: '';
    position: absolute;
    height: 450px;
    width: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.bg.tertiary}
    );
    z-index: 1;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  z-index: 1;
`;
