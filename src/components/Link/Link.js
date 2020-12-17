import Link from 'next/link';
import PropTypes from 'prop-types';

import StyledA from './Link.styled';

const InternalLink = ({ children, ...rest }) => (
  <Link {...rest}>
    <StyledA>{children}</StyledA>
  </Link>
);

InternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default InternalLink;
