import Image from 'next/image';
import PropTypes from 'prop-types';

import useThumb from '@hooks/useThumb';
import Alert from '@components/Alert/Alert';
import { thumbActionTypes } from '@constants/index';
import { StyledContent, StyledContainer } from './Thumb.styled';
import ThumbContent from '@components/ThumbContent/ThumbContent';
import OpinionPercentage from '@components/ThumbOpinionPercentage/ThumbOpinionPercentage';

const Thumb = ({
  id,
  image,
  dislikes,
  likes,
  title,
  since,
  category,
  description,
  onVote,
  onVoteAgain,
  previousVote
}) => {
  const [
    { vote, likesPercentage, dislikesPercentage, opinion },
    { setVote }
  ] = useThumb({
    likes,
    dislikes
  });
  return (
    <>
      <StyledContainer>
        <Image {...image} layout='fill' loading='lazy' objectFit='cover' />
        <StyledContent>
          <ThumbContent
            title={title}
            since={new Date(since)}
            category={category}
            description={description}
            opinion={opinion}
            onVote={(newVote) => {
              onVote({ vote: newVote, id });
              setVote(newVote);
            }}
            onVoteAgain={() => onVoteAgain({ id })}
            previousVote={previousVote}
          />
        </StyledContent>
        <OpinionPercentage
          likesPercentage={likesPercentage}
          dislikesPercentage={dislikesPercentage}
        />
      </StyledContainer>
      {vote && <Alert type={vote}>Thanks for voting!</Alert>}
    </>
  );
};

Thumb.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  dislikes: PropTypes.number,
  likes: PropTypes.number,
  title: PropTypes.string.isRequired,
  since: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string.isRequired,
  onVote: PropTypes.func,
  onVoteAgain: PropTypes.func,
  previousVote: PropTypes.oneOf([
    thumbActionTypes.like,
    thumbActionTypes.dislike
  ])
};

Thumb.defaultProps = {
  id: undefined,
  dislikes: 0,
  likes: 0,
  since: undefined,
  category: undefined,
  previousVote: undefined,
  onVote: () => {},
  onVoteAgain: () => {}
};

export default Thumb;
