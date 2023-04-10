import { Container, LinkCalculator, LinkDiary } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <LinkDiary to="/diary">DIARY</LinkDiary>
      <LinkCalculator to="calculator">CALCULATOR</LinkCalculator>
    </Container>
  );
};

export default Navigation;
