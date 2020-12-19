import styled from 'styled-components';

export default styled.div`
  position: fixed;
  right: 0;
  top: 10%;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  color: ${({ theme }) => theme.colors.font.secondary};
  background-color: ${({ theme, type }) => theme.colors.bg[type]};
  padding: ${({ theme }) => theme.utils.spacing(5)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.medium} 0 0 ${theme.borderRadius.medium}`};

  animation: run 2s 1;
  animation-direction: alternate;
  @keyframes run {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }
`;
