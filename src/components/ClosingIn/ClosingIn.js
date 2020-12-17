import PropTypes from 'prop-types';

import {
  StyledTime,
  StyledMessage,
  StyledUnitTime,
  StyledContainer,
  StyledTimeContainer,
  StyledMessageContainer
} from './ClosingIn.styled';

const ClosingIn = ({ message, closingIn, uniteTime }) => (
  <StyledContainer>
    <StyledMessageContainer>
      <StyledMessage>{message}</StyledMessage>
    </StyledMessageContainer>
    <StyledTimeContainer>
      <StyledTime>{closingIn}</StyledTime>
      <StyledUnitTime>{uniteTime}</StyledUnitTime>
    </StyledTimeContainer>
  </StyledContainer>
);

ClosingIn.propTypes = {
  message: PropTypes.string,
  closingIn: PropTypes.number.isRequired,
  uniteTime: PropTypes.string
};

ClosingIn.defaultProps = {
  message: 'CLOSING IN',
  uniteTime: 'days'
};

export default ClosingIn;
