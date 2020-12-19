import PropTypes from 'prop-types';

import StyledBlurCard from './BlurCard.styled';

const BlurCard = ({ children, blurIntensity }) => (
  <StyledBlurCard blurIntensity={blurIntensity}>{children}</StyledBlurCard>
);

BlurCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  blurIntensity: PropTypes.number
};

BlurCard.defaultProps = {
  blurIntensity: 30
};

export default BlurCard;
