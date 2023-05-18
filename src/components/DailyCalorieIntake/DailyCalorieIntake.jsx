import { useDispatch, useSelector } from 'react-redux';
import {
  BtnLosingWeight,
  BtnLosingWeightBox,
  BtnTabletDescClose,
  BtnTabletDescCloseSvg,
  Container,
  Item,
  Span,
  Title,
  TitleSecondary,
  Value,
  Wrapper,
} from './DailyCalorieIntake.styled';
import {
  selectModalDataDailyRate,
  selectModalDataNotAllowedProducts,
  selectOpenModal,
} from 'redux/userData/userDataSelectors';
import { modalClose } from 'redux/userData/userDataSlice';
import { useIsTabletOrDesktop } from 'hooks/mediaQuery';
import iconBtnClose from '../../assets/sprite.svg';
import { useEffect } from 'react';

const DailyCalorieIntake = () => {
  const dailyRate = useSelector(selectModalDataDailyRate);
  const notAllowedProducts = useSelector(selectModalDataNotAllowedProducts);
  const dispatch = useDispatch();
  const isTabletOrDesc = useIsTabletOrDesktop();
  const isModalOpen = useSelector(selectOpenModal);

  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = 'hidden';
  //   }
  //   if (!isModalOpen) {
  //     document.body.style.overflow = '';
  //   }
  // }, [isModalOpen]);
  // const handleClose = (event)=>{
  //   if(event.target === event.CurrentTarget){

  //   }
  // }

  return (
    <Container>
      <Wrapper>
        {isTabletOrDesc && (
          <>
            <BtnTabletDescClose
              type="button"
              onClick={() => dispatch(modalClose())}
            >
              <BtnTabletDescCloseSvg>
                <use href={iconBtnClose + '#icon-btnClose'}></use>
              </BtnTabletDescCloseSvg>
            </BtnTabletDescClose>
          </>
        )}
        <Title>Your recommended daily calorie intake is</Title>
        <Value>
          {dailyRate} <Span>kal</Span>
        </Value>
        <TitleSecondary>Foods you should not eat</TitleSecondary>
        <ul>
          {notAllowedProducts?.length !== 0 ? (
            notAllowedProducts?.map((item, index) => (
              <Item>
                {index}.{item}
              </Item>
            ))
          ) : (
            <Item>There are no prohibited products</Item>
          )}
          <BtnLosingWeightBox>
            <BtnLosingWeight
              type="button"
              onClick={() => dispatch(modalClose())}
            >
              Start losing weight
            </BtnLosingWeight>
          </BtnLosingWeightBox>
        </ul>
      </Wrapper>
    </Container>
  );
};

export default DailyCalorieIntake;
