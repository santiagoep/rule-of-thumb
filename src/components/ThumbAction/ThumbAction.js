import Image from 'next/image';
import PropTypes from 'prop-types';

import { thumbActionTypes } from '@constants/index';
import { StyledAction, StyledActionLogo } from './ThumbAction.styled';

const ThumbAction = ({ className, onClick, type, isSelected, selectable }) => (
  <StyledAction
    className={className}
    onClick={onClick}
    color={type}
    isSelected={selectable ? isSelected : false}
  >
    <StyledActionLogo>
      <Image
        quality={100}
        loading='lazy'
        layout='fill'
        objectFit='contain'
        src={`/icons/${type}.svg`}
      />
    </StyledActionLogo>
  </StyledAction>
);

ThumbAction.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([thumbActionTypes.like, thumbActionTypes.dislike]),
  isSelected: PropTypes.bool,
  selectable: PropTypes.bool
};

ThumbAction.defaultProps = {
  className: '',
  onClick: () => {},
  type: thumbActionTypes.like,
  isSelected: false,
  selectable: true
};

export default ThumbAction;
