import { useDispatch, useSelector } from 'react-redux';

import { keyArray } from '@utils/arrays';
import thumbsActions from '@store/reducers/thumbs';
import { thumbActionTypes } from '@constants/index';

const voteKeys = {
  [thumbActionTypes.like]: 'likes',
  [thumbActionTypes.dislike]: 'dislikes'
};

const useThumbs = () => {
  const dispatch = useDispatch();
  const keyedThumbs = useSelector(({ thumbs: { data } }) =>
    keyArray(data, 'id')
  );

  const onVote = ({ id, vote }) => {
    const voteKey = voteKeys[vote];
    const modifiedThumb = keyedThumbs[id];

    const newThumb = {
      ...modifiedThumb,
      [voteKey]: modifiedThumb[voteKey] + 1,
      previousVote: vote
    };

    if (modifiedThumb.previousVote) {
      newThumb[voteKeys[modifiedThumb.previousVote]]--;
    }

    dispatch(
      thumbsActions.setThumbs(
        Object.values({
          ...keyedThumbs,
          [id]: newThumb
        })
      )
    );
  };

  const onVoteAgain = ({ id }) => {
    const modifiedThumb = keyedThumbs[id];
    const key = [voteKeys[modifiedThumb.previousVote]];
    dispatch(
      thumbsActions.setThumbs(
        Object.values({
          ...keyedThumbs,
          [id]: {
            ...modifiedThumb,
            [key]: modifiedThumb[voteKeys[modifiedThumb.previousVote]] - 1,
            previousVote: undefined
          }
        })
      )
    );
  };
  return {
    keyedThumbs,
    onVote,
    onVoteAgain,
    thumbs: Object.values(keyedThumbs)
  };
};

export default useThumbs;
