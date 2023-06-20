import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { useSelector } from 'react-redux';
import {
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
