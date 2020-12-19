import { useState } from 'react';
import PropTypes from 'prop-types';

import { thumbActionTypes } from '@constants/index';
import StyledActions from './BlurThumbActions.styled';
import Action from '@components/BlurThumbAction/BlurThumbAction';

const Actions = ({ onVote }) => {
  const [selectedAction, setSelectedAction] = useState();
  return (
    <StyledActions>
      <Action
        type={thumbActionTypes.like}
        isSelected={selectedAction === thumbActionTypes.like}
        onClick={() => {
          setSelectedAction(thumbActionTypes.like);
          onVote(thumbActionTypes.like);
        }}
      />
      <Action
        type={thumbActionTypes.dislike}
        isSelected={selectedAction === thumbActionTypes.dislike}
        onClick={() => {
          setSelectedAction(thumbActionTypes.dislike);
          onVote(thumbActionTypes.dislike);
        }}
      />
    </StyledActions>
  );
};

Actions.propTypes = {
  onVote: PropTypes.func
};

Actions.defaultProps = {
  onVote: () => {}
};

export default Actions;
