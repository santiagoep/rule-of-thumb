import { useState } from 'react';
import PropTypes from 'prop-types';

import { thumbActionTypes } from '@constants/index';
import ThumbAction from '@components/ThumbAction/ThumbAction';
import { StyledButton, StyledActions } from './ThumbActions.styled';

const ThumbActions = ({
  actionText,
  repeatActionText,
  onVote,
  onVoteAgain,
  previousVote
}) => {
  const [selectedAction, setSelectedAction] = useState();

  return !previousVote ? (
    <StyledActions>
      <ThumbAction
        type={thumbActionTypes.like}
        onClick={() => setSelectedAction(thumbActionTypes.like)}
        isSelected={selectedAction === thumbActionTypes.like}
        selectable
      />
      <ThumbAction
        type={thumbActionTypes.dislike}
        onClick={() => setSelectedAction(thumbActionTypes.dislike)}
        isSelected={selectedAction === thumbActionTypes.dislike}
        selectable
      />
      <StyledButton onClick={() => onVote(selectedAction)}>
        {actionText}
      </StyledButton>
    </StyledActions>
  ) : (
    <StyledButton onClick={onVoteAgain}>{repeatActionText}</StyledButton>
  );
};

ThumbActions.propTypes = {
  actionText: PropTypes.string,
  repeatActionText: PropTypes.string,
  onVote: PropTypes.func,
  onVoteAgain: PropTypes.func,
  previousVote: PropTypes.arrayOf([
    thumbActionTypes.like,
    thumbActionTypes.dislike
  ]).isRequired
};

ThumbActions.defaultProps = {
  actionText: 'Vote now',
  repeatActionText: 'Vote again',
  onVote: () => {},
  onVoteAgain: () => {}
};

export default ThumbActions;
