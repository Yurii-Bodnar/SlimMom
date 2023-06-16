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
  selectEatenProducts,
  selectEatenProductsAfterAddOperation,
} from 'redux/userData/userDataSelectors';
import { useSelector } from 'react-redux';

const DiaryProductsListItem = () => {
  const products = useSelector(selectEatenProducts);
  const productsAfterAddOperation = useSelector(
    selectEatenProductsAfterAddOperation
  );

  return (
    <>
      {products
        ? products.map(({ id, title, weight, kcal }) => (
            <Item key={id}>
              <Title>{title.slice(0, 14) + '...'}</Title>
              <TextGrams>{weight}g</TextGrams>
              <TextKcal>{Math.ceil(kcal)}kcal</TextKcal>
              <BtnBox>
                <Btn type="button">
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
                <Btn type="button">
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
