import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'redux/products/productsSelectors';
import { getInfoDay } from 'redux/userData/userDataOperation';
import {
  selectDataCalendar,
  selectEatenProducts,
  selectEatenProductsAfterAddOperation,
} from 'redux/userData/userDataSelectors';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = () => {
  const product = useSelector(selectEatenProducts);
  const productsAfterAddOperation = useSelector(
    selectEatenProductsAfterAddOperation
  );

  return (
    <>
      {product?.length > 0 || productsAfterAddOperation?.length > 0 ? (
        <List>
          <DiaryProductsListItem />
        </List>
      ) : null}
    </>
  );
};

export default DiaryProductsList;
