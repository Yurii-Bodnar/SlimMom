import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/mediaQuery';
import iconBtnCloseMob from '../../assets/sprite.svg';
import { BoxMobileForBtn, BtnMobClose, BtnMobCloseSvg } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from 'redux/userData/userDataSlice';
import { selectOpenModal } from 'redux/userData/userDataSelectors';
import { useEffect } from 'react';

const Modal = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectOpenModal);
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const scrollToTop = () => {
      if (isTablet) {
        window.scroll({
          top: 255,
          // left: 100,
          behavior: 'smooth',
        });
      }
      if (isDesktop) {
        window.scroll({
          top: 140,
          // left: 100,
          behavior: 'smooth',
        });
      }
    };
    if (isModalOpen) {
      scrollToTop();
    }
  }, [isModalOpen]);
  return (
    <>
      {isMobile && (
        <BoxMobileForBtn>
          <BtnMobClose
            type="button"
            onClick={() => dispatch(modalClose())}
          ></BtnMobClose>
          <BtnMobCloseSvg>
            <use href={iconBtnCloseMob + '#icon-btn-mob-close'}></use>
          </BtnMobCloseSvg>
        </BoxMobileForBtn>
      )}

      <DailyCalorieIntake />
    </>
  );
};

export default Modal;
