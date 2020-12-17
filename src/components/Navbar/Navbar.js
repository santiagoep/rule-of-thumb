import PropTypes from 'prop-types';

import Menu from './Menu/Menu';
import Link from '@components/Link/Link';
import Container from '@components/Container/Container';
import { StyledNavbar, StyledBrand } from './Navbar.styled';

const Navbar = ({ menuItems }) => (
  <Container>
    <StyledNavbar>
      <StyledBrand>
        <Link href='/'>
          <h1>Rule of Thumb.</h1>
        </Link>
      </StyledBrand>
      <Menu items={menuItems} />
    </StyledNavbar>
  </Container>
);

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Navbar;
