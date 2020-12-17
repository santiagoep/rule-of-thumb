import styled from 'styled-components';

export default styled.div`
  padding: ${({ theme }) => theme.utils.spacing(7, 7)};
  position: relative;
  backdrop-filter: blur(30px);
  color: ${({ theme }) => theme.colors.font.secondary};
  :after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.bg.tertiary};
    opacity: 0.4;
  }
`;
