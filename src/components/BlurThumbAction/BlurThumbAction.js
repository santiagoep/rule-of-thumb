import Image from 'next/image';
import PropTypes from 'prop-types';

import { thumbActionTypes } from '@constants/index';
import { StyledAction, StyledActionLogo } from './BlurThumbAction.styled';

const BlurThumbAction = ({ type, onClick, isSelected, selectable }) => (
  <StyledAction
    onClick={onClick}
    type={type}
    isSelected={selectable ? isSelected : false}
  >
    <StyledActionLogo>
      <Image
        quality={100}
        loading='eager'
        layout='fill'
        objectFit='contain'
        priority
        src={`/icons/${type}.svg`}
      />
    </StyledActionLogo>
  </StyledAction>
);

BlurThumbAction.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf([thumbActionTypes.like, thumbActionTypes.dislike]),
  isSelected: PropTypes.bool,
  selectable: PropTypes.bool
};

BlurThumbAction.defaultProps = {
  onClick: () => {},
  type: thumbActionTypes.like,
  isSelected: false,
  selectable: true
};

export default BlurThumbAction;
