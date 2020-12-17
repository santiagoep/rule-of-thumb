import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: transparent;
  padding-top: ${({ theme }) => theme.utils.spacing(8)};
  color: ${({ theme }) => theme.colors.font.secondary};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  display: flex;
  justify-content: space-between;
`;

export const StyledBrand = styled.div`
  font-size: ${({ theme }) => theme.font.size.subtitle2};
  cursor: pointer;
`;
