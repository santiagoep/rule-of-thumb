import PropTypes from 'prop-types';

import {
  StyledSince,
  StyledTitle,
  StyledCategory,
  StyledContainer,
  StyledDescription,
  StyledAdditionalInfo
} from './ThumbContent.styled';
import useDate from '@hooks/useDate';
import { thumbActionTypes } from '@constants/index';
import ThumbAction from '@components/ThumbAction/ThumbAction';
import ThumbActions from '@components/ThumbActions/ThumbActions';

const ThumbContent = ({
  title,
  since,
  category,
  description,
  opinion,
  onVote,
  onVoteAgain,
  previousVote
}) => {
  const dateManager = useDate();

  return (
    <StyledContainer>
      <StyledTitle>
        {opinion && (
          <ThumbAction
            className='thumb__highest-opinion'
            type={opinion}
            selectable={false}
          />
        )}
        {title}
      </StyledTitle>
      <StyledAdditionalInfo>
        {since && <StyledSince>{dateManager(since).fromNow()}</StyledSince>}
        {category && <StyledCategory>{`in ${category}`}</StyledCategory>}
      </StyledAdditionalInfo>
      <StyledDescription>{description}</StyledDescription>
      <ThumbActions
        onVote={onVote}
        onVoteAgain={onVoteAgain}
        previousVote={previousVote}
      />
    </StyledContainer>
  );
};

ThumbContent.propTypes = {
  title: PropTypes.string.isRequired,
  since: PropTypes.instanceOf(Date),
  category: PropTypes.string,
  description: PropTypes.string.isRequired,
  opinion: PropTypes.oneOf([thumbActionTypes.like, thumbActionTypes.dislike]),
  onVote: PropTypes.func,
  onVoteAgain: PropTypes.func,
  previousVote: PropTypes.oneOf([
    thumbActionTypes.like,
    thumbActionTypes.dislike
  ])
};

ThumbContent.defaultProps = {
  since: undefined,
  category: undefined,
  opinion: undefined,
  previousVote: undefined,
  onVote: () => {},
  onVoteAgain: () => {}
};

export default ThumbContent;
