import Head from 'next/head';
import PropTypes from 'prop-types';

import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';

const Layout = ({
  children,
  menuItems,
  footerLinks,
  footerSocialNetworks,
  title
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar menuItems={menuItems} />
    {children}
    <Footer links={footerLinks} socialNetworks={footerSocialNetworks} />
  </>
);

Layout.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  footerLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  footerSocialNetworks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: 'Zemoga | Build Better'
};

export default Layout;
