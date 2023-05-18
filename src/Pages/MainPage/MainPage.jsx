import CalculatorCalorieForm from 'components/CalculatorCalorieForm/CalculatorCalorieForm';
import Modal from 'components/Modal/Modal';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import { useIsMobile, useIsTabletOrDesktop } from 'hooks/mediaQuery';

import { useSelector } from 'react-redux';
import { isSideBarOpen } from 'redux/auth/authSelectors';
import { selectOpenModal } from 'redux/userData/userDataSelectors';

const MainPage = () => {
  const isSideBarModalOpen = useSelector(isSideBarOpen);

  const isModalOpen = useSelector(selectOpenModal);
  const isMobile = useIsMobile();
  const isTabletOrDesc = useIsTabletOrDesktop();
  console.log('isMob', isMobile);
  return (
    <>
      {isSideBarModalOpen && <RightSideBar />}
      {isMobile && !isModalOpen ? (
        <CalculatorCalorieForm />
      ) : isMobile && isModalOpen ? (
        <Modal />
      ) : null}
      {isTabletOrDesc && !isModalOpen ? (
        <CalculatorCalorieForm />
      ) : isTabletOrDesc && isModalOpen ? (
        <>
          <CalculatorCalorieForm /> <Modal />
        </>
      ) : null}
    </>
  );
};

export default MainPage;
