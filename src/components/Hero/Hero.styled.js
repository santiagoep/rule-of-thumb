import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: fill-available;
  height: 700px;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.utils.spacing(10, 0)};
  :before {
    content: '';
    position: absolute;
    height: 300px;
    width: 100%;
    right: 0;
    top: 0;
    left: 0;
    background: linear-gradient(
      0,
      transparent,
      ${({ theme }) => theme.colors.bg.tertiary80}
    );
    z-index: 1;
  }
`;
