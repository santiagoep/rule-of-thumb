import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.desktop} {
    margin: 0;
    width: 45%;
    max-width: 600px;
  }
`;
