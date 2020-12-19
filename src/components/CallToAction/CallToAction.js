import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledAction,
  StyledMessage,
  StyledContainer
} from './CallToAction.styled';
import Container from '@components/Container/Container';

const CallToAction = ({ message, callToActionText, onAction }) => (
  <Container>
    <Image
      quality={100}
      loading='lazy'
      layout='fill'
      objectFit='cover'
      src='/images/persons.jpg'
    />
    <StyledContainer>
      <StyledMessage>{message}</StyledMessage>
      <StyledAction onClick={onAction}>{callToActionText}</StyledAction>
    </StyledContainer>
  </Container>
);

CallToAction.propTypes = {
  message: PropTypes.string.isRequired,
  callToActionText: PropTypes.string.isRequired,
  onAction: PropTypes.func
};

CallToAction.defaultProps = {
  onAction: () => {}
};

export default CallToAction;
