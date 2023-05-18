import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { useIsMobile } from 'hooks/mediaQuery';
import iconBtnCloseMob from '../../assets/sprite.svg';
import { BoxMobileForBtn, BtnMobClose, BtnMobCloseSvg } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { modalClose } from 'redux/userData/userDataSlice';

const Modal = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
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
