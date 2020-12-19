import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Thumb from '@components/Thumb/Thumb';
import { StyledList, StyledListItem } from './ThumbList.styled';

const ThumbList = ({ thumbs, onVote, onVoteAgain }) => {
  const memoizedThumbs = useMemo(
    () =>
      thumbs.map(
        ({
          id,
          image,
          dislikes,
          likes,
          title,
          since,
          category,
          description,
          previousVote,
          ...rest
        }) => (
          <StyledListItem key={`thumb-${id}-${title}`}>
            <Thumb
              id={id}
              image={image}
              dislikes={dislikes}
              likes={likes}
              title={title}
              since={since}
              category={category}
              description={description}
              onVote={onVote}
              onVoteAgain={onVoteAgain}
              previousVote={previousVote}
              {...rest}
            />
          </StyledListItem>
        )
      ),
    [thumbs, onVote, onVoteAgain]
  );
  return <StyledList>{memoizedThumbs}</StyledList>;
};

ThumbList.propTypes = {
  onVote: PropTypes.func,
  onVoteAgain: PropTypes.func,
  thumbs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({}),
      dislikes: PropTypes.number,
      likes: PropTypes.number,
      title: PropTypes.string,
      since: PropTypes.string,
      category: PropTypes.string,
      description: PropTypes.string,
      previousVote: PropTypes.string
    })
  )
};

ThumbList.defaultProps = {
  onVote: () => {},
  onVoteAgain: () => {},
  thumbs: []
};

export default ThumbList;
