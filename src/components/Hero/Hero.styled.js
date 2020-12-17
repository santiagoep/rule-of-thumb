import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: fill-available;
  height: calc(100vh - ${({ theme }) => theme.utils.spacing(20)});
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.utils.spacing(10, 0)};
  :before {
    content: '';
    position: absolute;
    top: -95px;
    left: 0;
    width: 100%;
    height: 95px;
    box-shadow: ${({ theme }) => theme.boxShadows.topHeroShadow};
    z-index: 1;
  }
`;
