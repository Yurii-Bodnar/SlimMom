import { useNavigate } from 'react-router-dom';
import { Container, LinkCalculator, LinkDiary } from './Navigation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { closeModal } from 'redux/auth/authSlice';

const Navigation = () => {
  const navigate = useNavigate();
  const isModalOpen = useSelector(isSideBarOpen);
  const dispatch = useDispatch();
  const handleDiary = () => {
    dispatch(closeModal());
    navigate('/diary');
  };
  const handleCalculator = () => {
    dispatch(closeModal());
    navigate('/calculator');
  };
  return (
    <Container>
      <LinkDiary type="button" onClick={handleDiary}>
        DIARY
      </LinkDiary>
      <LinkCalculator type="button" onClick={handleCalculator}>
        CALCULATOR
      </LinkCalculator>
    </Container>
  );
};

export default Navigation;
