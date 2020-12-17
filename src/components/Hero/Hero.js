import Image from 'next/image';
import PropTypes from 'prop-types';

import StyledContainer from './Hero.styled';

const Hero = ({ children, image }) => (
  <StyledContainer>
    <Image
      quality={100}
      loading='eager'
      layout='fill'
      objectFit='cover'
      priority
      objectPosition='0px 0px'
      {...image}
    />
    {children}
  </StyledContainer>
);

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired
};

Hero.defaultProps = {};

export default Hero;
