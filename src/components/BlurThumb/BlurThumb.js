import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  StyledTitle,
  StyledMoreInfo,
  StyledContainer,
  StyledDescription,
  StyledCallToAction,
  StyledMoreInfoLogo,
  StyledTitleComplement
} from './BlurThumb.styled';
import useThumb from '@hooks/useThumb';
import Alert from '@components/Alert/Alert';
import BlurCard from '@components/BlurCard/BlurCard';
import Actions from '@components/BlurThumbActions/BlurThumbActions';

const BlurThumb = ({
  id,
  titleComplement,
  title,
  description,
  moreInformationText,
  moreInformationLink,
  callToActionText,
  onVote
}) => {
  const [{ vote }, { setVote }] = useThumb();
  const memoizedMoreInfo = useMemo(
    () =>
      moreInformationLink && (
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
      ),
    [moreInformationLink, moreInformationText]
  );
  return (
    <>
      <StyledContainer>
        <BlurCard>
          <StyledTitleComplement>{titleComplement}</StyledTitleComplement>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {memoizedMoreInfo}
          <StyledCallToAction>{callToActionText}</StyledCallToAction>
        </BlurCard>
        <Actions
          onVote={(newVote) => {
            onVote({ vote: newVote, id });
            setVote(newVote);
          }}
        />
      </StyledContainer>
      {vote && <Alert type={vote}>Thanks for voting!</Alert>}
    </>
  );
};

BlurThumb.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  titleComplement: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moreInformationText: PropTypes.string,
  moreInformationLink: PropTypes.shape({ href: PropTypes.string }),
  callToActionText: PropTypes.string,
  onVote: PropTypes.func
};

BlurThumb.defaultProps = {
  id: undefined,
  titleComplement: "What's your opinion on",
  moreInformationText: 'More information',
  moreInformationLink: undefined,
  callToActionText: "What's Your Verdict?",
  onVote: () => {}
};

export default BlurThumb;
