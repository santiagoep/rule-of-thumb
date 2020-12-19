import { useMemo, useState } from 'react';

import { thumbActionTypes } from '@constants/index';

const useThumb = ({ likes = 0, dislikes = 0 } = {}) => {
  const [vote, setVote] = useState(undefined);

  const internalSetVote = (newVote) => {
    setVote(newVote);
    setTimeout(() => setVote(undefined), 5000);
  };

  const total = useMemo(() => likes + dislikes, [likes, dislikes]);
  const likesPercentage = useMemo(() => Math.floor((likes * 100) / total), [
    likes,
    total
  ]);
  const dislikesPercentage = useMemo(
    () => Math.floor((dislikes * 100) / total),
    [dislikes, total]
  );
  const opinion = useMemo(
    () => (likes > dislikes ? thumbActionTypes.like : thumbActionTypes.dislike),
    [likes, dislikes]
  );

  return [
    { vote, likesPercentage, dislikesPercentage, opinion },
    { setVote: internalSetVote }
  ];
};

export default useThumb;
