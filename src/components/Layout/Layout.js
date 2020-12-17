import PropTypes from 'prop-types';
import Navbar from '@components/Navbar/Navbar';

const Layout = ({ children, menuItems }) => (
  <>
    <Navbar menuItems={menuItems} />
    {children}
  </>
);

Layout.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
