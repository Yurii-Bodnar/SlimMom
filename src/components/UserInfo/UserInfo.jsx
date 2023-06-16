import { useIsDesktop } from 'hooks/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
import {
  Btn,
  BtnBack,
  BtnBox,
  Container,
  Svg,
  TextName,
} from './UserInfo.styled';
import { selectMobileFromAddProduct } from 'redux/products/productsSelectors';
import backForMobileBtn from '../../assets/sprite.svg';
import { setMobileFormAddProductsClose } from 'redux/products/productSlice';

const UserInfo = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobileFormOpen = useSelector(selectMobileFromAddProduct);

  const logOutHandler = () => {
    dispatch(logOutUser());
    navigate('/');
    console.log('here');
  };
  return (
    <Container>
      {isMobileFormOpen && (
        <BtnBox>
          <BtnBack
            type="button"
            onClick={() => dispatch(setMobileFormAddProductsClose)}
          >
            <Svg>
              <use href={backForMobileBtn + '#icon-back-for-mobile-form'}></use>
            </Svg>
          </BtnBack>
        </BtnBox>
      )}
      <TextName>{name}</TextName>
      <Btn type="button" onClick={logOutHandler}>
        Exit
      </Btn>
    </Container>
  );
};

export default UserInfo;
