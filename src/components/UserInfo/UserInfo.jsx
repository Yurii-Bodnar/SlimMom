import { useIsDesktop } from 'hooks/mediaQuery';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { Btn, Container, TextName } from './UserInfo.styled';

const UserInfo = () => {
  const name = useSelector(selectUserName);
  const isDesktop = useIsDesktop();
  return (
    <Container>
      <TextName>{name}</TextName>
      <Btn type="button">Exit</Btn>
    </Container>
  );
};

export default UserInfo;
