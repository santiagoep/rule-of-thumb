import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 1px;
  margin: ${({ theme }) => theme.utils.spacing(9, 0, 7, 0)};
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 6px 1px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.separator.primary} 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-image: -webkit-linear-gradient(
    to right,
    ${({ theme }) => theme.colors.separator.primary} 10%,
    rgba(255, 255, 255, 0) 0%
  );
`;
