import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledLike,
  StyledTitle,
  StyledDisLike,
  StyledActions,
  StyledLikeLogo,
  StyledMoreInfo,
  StyledContainer,
  StyledDisLikeLogo,
  StyledDescription,
  StyledCallToAction,
  StyledMoreInfoLogo,
  StyledTitleComplement
} from './BlurThumb.styled';
import BlurCard from '@components/BlurCard/BlurCard';

const BlurThumb = ({
  titleComplement,
  title,
  description,
  moreInformationText,
  moreInformationLink,
  callToActionText,
  onLike,
  onDislike
}) => (
  <StyledContainer>
    <BlurCard>
      <StyledTitleComplement>{titleComplement}</StyledTitleComplement>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {moreInformationLink && (
        <StyledMoreInfo>
          <StyledMoreInfoLogo>
            <Image
              quality={100}
              loading='eager'
              layout='fill'
              objectFit='contain'
              priority
              src='/icons/wiki.png'
            />
          </StyledMoreInfoLogo>
          <Link {...moreInformationLink}>{moreInformationText}</Link>
        </StyledMoreInfo>
      )}
      <StyledCallToAction>{callToActionText}</StyledCallToAction>
    </BlurCard>
    <StyledActions>
      <StyledLike onClick={onLike}>
        <StyledLikeLogo>
          <Image
            quality={100}
            loading='eager'
            layout='fill'
            objectFit='contain'
            priority
            src='/icons/like.svg'
          />
        </StyledLikeLogo>
      </StyledLike>
      <StyledDisLike onClick={onDislike}>
        <StyledDisLikeLogo>
          <Image
            quality={100}
            loading='eager'
            layout='fill'
            objectFit='contain'
            priority
            src='/icons/dislike.svg'
          />
        </StyledDisLikeLogo>
      </StyledDisLike>
    </StyledActions>
  </StyledContainer>
);

BlurThumb.propTypes = {
  titleComplement: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moreInformationText: PropTypes.string,
  moreInformationLink: PropTypes.shape({ href: PropTypes.string }),
  callToActionText: PropTypes.string,
  onLike: PropTypes.func,
  onDislike: PropTypes.func
};

BlurThumb.defaultProps = {
  titleComplement: "What's your opinion on",
  moreInformationText: 'More information',
  moreInformationLink: undefined,
  callToActionText: "What's Your Verdict?",
  onLike: () => {},
  onDislike: () => {}
};

export default BlurThumb;
