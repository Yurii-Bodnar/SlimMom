import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

import { Container } from './RightSideBar.styled';
import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';

const RightSideBar = () => {
  const isModalOpen = useSelector(isSideBarOpen);
  return (
    <>
      {isModalOpen && (
        <>
          {' '}
          <Header />
          <Container>
            <Navigation />
          </Container>
        </>
      )}
    </>
  );
};

export default RightSideBar;
