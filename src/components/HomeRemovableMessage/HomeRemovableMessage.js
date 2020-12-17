import PropTypes from 'prop-types';

import {
  StyledTitle,
  StyledContainer,
  StyledDescription,
  StyledTitleContainer,
  StyledTitleComplement,
  StyledDescriptionContainer,
  StyledMessageContainer
} from './HomeRemovableMessage.styled';
import RemovableMessage from '@components/RemovableMessage/RemovableMessage';

const HomeRemovableMessage = ({ titleComplement, title, description }) => (
  <StyledContainer>
    <RemovableMessage>
      <StyledMessageContainer>
        <StyledTitleContainer>
          <StyledTitleComplement>{titleComplement}</StyledTitleComplement>
          <StyledTitle>{title}</StyledTitle>
        </StyledTitleContainer>
        <StyledDescriptionContainer>
          <StyledDescription>{description}</StyledDescription>
        </StyledDescriptionContainer>
      </StyledMessageContainer>
    </RemovableMessage>
  </StyledContainer>
);

HomeRemovableMessage.propTypes = {
  titleComplement: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default HomeRemovableMessage;
