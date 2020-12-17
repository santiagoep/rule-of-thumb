import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Container from '@components/Container/Container';
import { StyledContainer, StyledCloseIcon } from './RemovableMessage.styled';

const RemovableMessage = ({ children, containerProps }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClickCloseIcon = () => setIsOpen(false);
  return (
    isOpen && (
      <Container {...containerProps}>
        <StyledContainer>
          {children}
          <StyledCloseIcon onClick={onClickCloseIcon}>
            <Image
              quality={100}
              loading='eager'
              layout='fill'
              objectFit='cover'
              priority
              src='/icons/close.svg'
            />
          </StyledCloseIcon>
        </StyledContainer>
      </Container>
    )
  );
};

RemovableMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  containerProps: PropTypes.shape({})
};

RemovableMessage.defaultProps = {
  containerProps: {}
};

export default RemovableMessage;
