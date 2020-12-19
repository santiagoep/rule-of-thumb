import PropTypes from 'prop-types';

import StyledTitle from './Section.styled';
import Container from '@components/Container/Container';

const Section = ({ title, children }) => (
  <Container>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Section;
