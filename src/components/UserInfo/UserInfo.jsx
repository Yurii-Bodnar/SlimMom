import { useIsDesktop } from 'hooks/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
import { Btn, Container, TextName } from './UserInfo.styled';

const UserInfo = () => {
  const name = useSelector(selectUserName);
  const isDesktop = useIsDesktop();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutUser());
    navigate('/');
    console.log('here');
  };
  return (
    <Container>
      <TextName>{name}</TextName>
      <Btn type="button" onClick={logOutHandler}>
        Exit
      </Btn>
    </Container>
  );
};

export default UserInfo;
