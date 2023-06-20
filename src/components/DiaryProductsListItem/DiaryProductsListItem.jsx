import {
  Btn,
  BtnBox,
  Item,
  Svg,
  TextGrams,
  TextKcal,
  Title,
} from './DiaryProductsListItem.styled';
import btnDeleteIcon from '../../assets/sprite.svg';
import {
  selectDateNow,
  selectEatenProducts,
  selectEatenProductsAfterAddOperation,
} from 'redux/userData/userDataSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getInfoDay } from 'redux/userData/userDataOperation';

const DiaryProductsListItem = () => {
  const products = useSelector(selectEatenProducts);
  const productsAfterAddOperation = useSelector(
    selectEatenProductsAfterAddOperation
  );
  const daySummary = useSelector(state => state.userData.userSummary?.id);
  const date = useSelector(selectDateNow);
  const dispatch = useDispatch();

  const deleteProductHandler = e => {
    const dataProduct = {
      dayId: daySummary,
      eatenProductId: e.currentTarget.id,
    };
    dispatch(deleteProduct(dataProduct));
    dispatch(getInfoDay({ date: date }));
  };

  return (
    <>
      {products
        ? products.map(({ id, title, weight, kcal }) => (
            <Item key={id}>
              <Title>{title.slice(0, 14) + '...'}</Title>
              <TextGrams>{weight}g</TextGrams>
              <TextKcal>{Math.ceil(kcal)}kcal</TextKcal>
              <BtnBox>
                <Btn
                  type="button"
                  id={id}
                  onClick={e => deleteProductHandler(e)}
                >
                  <Svg>
                    <use href={btnDeleteIcon + '#icon-btn-delete'}></use>
                  </Svg>
                </Btn>
              </BtnBox>
            </Item>
          ))
        : productsAfterAddOperation
        ? productsAfterAddOperation.map(({ id, title, weight, kcal }) => (
            <Item key={id}>
              <Title>{title.slice(0, 14) + '...'}</Title>
              <TextGrams>{weight}g</TextGrams>
              <TextKcal>{Math.ceil(kcal)}kcal</TextKcal>
              <BtnBox>
                <Btn
                  type="button"
                  id={id}
                  onClick={e => deleteProductHandler(e)}
                >
                  <Svg>
                    <use href={btnDeleteIcon + '#icon-btn-delete'}></use>
                  </Svg>
                </Btn>
              </BtnBox>
            </Item>
          ))
        : null}
    </>
  );
};

export default DiaryProductsListItem;
