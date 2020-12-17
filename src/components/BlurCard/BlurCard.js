import PropTypes from 'prop-types';

import StyledBlurCard from './BlurCard.styled';

const BlurCard = ({ children }) => <StyledBlurCard>{children}</StyledBlurCard>;

BlurCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default BlurCard;
