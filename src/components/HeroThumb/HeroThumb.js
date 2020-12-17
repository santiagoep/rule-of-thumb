import StyledContainer from './HeroThumb.styled';
import Container from '@components/Container/Container';
import BlurThumb from '@components/BlurThumb/BlurThumb';

const HeroThumb = (props) => (
  <Container>
    <StyledContainer>
      <BlurThumb {...props} />
    </StyledContainer>
  </Container>
);

export default HeroThumb;
