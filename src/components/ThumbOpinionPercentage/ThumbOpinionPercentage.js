import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledPercentage,
  StyledPercentageLogo,
  StyledPercentageText
} from './ThumbOpinionPercentage.styled';
import { thumbActionTypes } from '@constants/index';

const ThumbOpinionPercentage = ({ likesPercentage, dislikesPercentage }) => (
  <StyledContainer>
    <StyledPercentage
      type={thumbActionTypes.like}
      width={`${likesPercentage}%`}
    >
      <StyledPercentageLogo>
        <Image
          quality={100}
          loading='lazy'
          layout='fill'
          objectFit='contain'
          src='/icons/like.svg'
        />
      </StyledPercentageLogo>
      <StyledPercentageText>{likesPercentage}</StyledPercentageText>
    </StyledPercentage>
    <StyledPercentage
      type={thumbActionTypes.dislike}
      width={`${dislikesPercentage}%`}
    >
      <StyledPercentageLogo>
        <Image
          quality={100}
          loading='lazy'
          layout='fill'
          objectFit='contain'
          src='/icons/dislike.svg'
        />
      </StyledPercentageLogo>
      <StyledPercentageText>{dislikesPercentage}</StyledPercentageText>
    </StyledPercentage>
  </StyledContainer>
);

ThumbOpinionPercentage.propTypes = {
  likesPercentage: PropTypes.number,
  dislikesPercentage: PropTypes.number
};

ThumbOpinionPercentage.defaultProps = {
  likesPercentage: 0,
  dislikesPercentage: 0
};

export default ThumbOpinionPercentage;
