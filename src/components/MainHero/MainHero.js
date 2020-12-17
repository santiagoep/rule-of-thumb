import PropTypes from 'prop-types';

import Hero from '@components/Hero/Hero';
import ClosingIn from '@components/ClosingIn/ClosingIn';
import HeroThumb from '@components/HeroThumb/HeroThumb';

const MainHero = ({
  title,
  description,
  moreInformationLink,
  heroThumbProps,
  image,
  heroProps,
  closingIn,
  closingInProps
}) => (
  <Hero image={image} {...heroProps}>
    <HeroThumb
      title={title}
      description={description}
      moreInformationLink={moreInformationLink}
      {...heroThumbProps}
    />
    <ClosingIn closingIn={closingIn} {...closingInProps} />
  </Hero>
);

MainHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moreInformationLink: PropTypes.shape({ href: PropTypes.string }).isRequired,
  heroThumbProps: PropTypes.shape({}),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  heroProps: PropTypes.shape({}),
  closingIn: PropTypes.number.isRequired,
  closingInProps: PropTypes.shape({})
};

MainHero.defaultProps = {
  heroThumbProps: {},
  heroProps: {},
  closingInProps: {}
};

export default MainHero;
