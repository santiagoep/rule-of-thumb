import Image from 'next/image';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  StyledLink,
  StyledLogo,
  StyledLinks,
  StyledFollowUs,
  StyledContainer,
  StyledSocialNetwork,
  StyledSocialNetworks
} from './Footer.styled';
import Link from '@components/Link/Link';
import Container from '@components/Container/Container';

const Footer = ({ links, socialNetworks, followUsText }) => {
  const memoizedLinks = useMemo(
    () =>
      links?.map(({ url, text }, index) => (
        <StyledLink key={`footer__link--${text}-${index}`}>
          <Link href={url}>{text}</Link>
        </StyledLink>
      )),
    [links]
  );

  const memoizedSocialNetworks = useMemo(
    () =>
      socialNetworks?.map(({ url, image }, index) => (
        <StyledSocialNetwork key={`footer__social-network--${url}-${index}`}>
          <Link href={url}>
            <StyledLogo>
              <Image
                quality={100}
                loading='lazy'
                layout='fill'
                objectFit='cover'
                {...image}
              />
            </StyledLogo>
          </Link>
        </StyledSocialNetwork>
      )),
    [socialNetworks]
  );
  return (
    <Container>
      <StyledContainer>
        <StyledLinks>{memoizedLinks}</StyledLinks>
        <StyledSocialNetworks>
          <StyledFollowUs>{followUsText}</StyledFollowUs>
          {memoizedSocialNetworks}
        </StyledSocialNetworks>
      </StyledContainer>
    </Container>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
      }).isRequired
    })
  ).isRequired,
  followUsText: PropTypes.string
};

Footer.defaultProps = {
  followUsText: 'Follow us'
};

export default Footer;
