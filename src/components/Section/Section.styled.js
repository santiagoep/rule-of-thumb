import styled from 'styled-components';

export default styled.h3`
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.utils.spacing(10)};
  text-align: center;
  ${({ theme }) => theme.breakpoints.laptop} {
    text-align: left;
  }
`;
