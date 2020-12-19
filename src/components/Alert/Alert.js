import PropTypes from 'prop-types';

import StyledModal from './Alert.styled';
import { thumbActionTypes } from '@constants/index';

const Alert = ({ children, type }) => (
  <StyledModal type={type}>{children}</StyledModal>
);

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.oneOf([thumbActionTypes.like, thumbActionTypes.dislike])
};

Alert.defaultProps = {
  type: thumbActionTypes.like
};

export default Alert;
